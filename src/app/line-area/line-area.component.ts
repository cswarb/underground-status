import { Component, OnInit, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output } from "@angular/core";
import { FormControl } from "@angular/forms";
import { lineFacade } from "./line-facade.service";
import { delayFacade } from "../shared/delay/delay-facade.service";

import { appConstants } from "../app.constants";

@Component({
	moduleId: module.id,
    selector: "",
    templateUrl: "./line-area.template.html"
})
export class lineAreaComponent implements OnInit {

	lineData: any = [];
	listType: string = "Lines";
	searchString: string = "";
	delays: any = [];
	allLineStatuses: any = [];

	constructor(private _lineFacade: lineFacade, private _delayFacade: delayFacade, private _appConstants: appConstants) {}
	
	ngOnInit() {
		this.getAllLinesStatuses().then((lines) => {
			this.getDlrStatus().then((dlr) => {
				this.getOvergroundStatus().then((overground) => {
					this.getRailStatus().then((rail) => {
						this.getTramStatus().then((tram) => {
							this.allLineStatuses = lines.concat(overground).concat(dlr).concat(rail).concat(tram);
						}, (err) => {
							this.handleError(err);
						});
					}, (err) => {
						this.handleError(err);
					});
				}, (err) => {
					this.handleError(err);
				});
			}, (err) => {
				this.handleError(err);
			});
		}, (err) => {
			this.handleError(err);
		});
		this.getAllDelays();
	}

	private getAllDelays() {
		this._delayFacade.getAllDelays("tube").then((response) => {
			this.delays = response;
		}, (err) => {
			this.handleError(err);
		});
	}

	private getAllLinesStatuses(): any {
		return this._lineFacade.getAllLineStatuses(this._appConstants.app_travel_modes["tube"]);
	}

	private getDlrStatus(): any {
		return this._lineFacade.getAllLineStatuses(this._appConstants.app_travel_modes["dlr"]);
	}

	private getOvergroundStatus(): any {
		return this._lineFacade.getAllLineStatuses(this._appConstants.app_travel_modes["overground"]);
	}

	private getRailStatus(): any {
		return this._lineFacade.getAllLineStatuses(this._appConstants.app_travel_modes["tfl-rail"]);
	}

	private getTramStatus(): any {
		return this._lineFacade.getAllLineStatuses(this._appConstants.app_travel_modes["tram"]);
	}

	handleError(err: any) {
		console.log("error: ", err);
	}

}