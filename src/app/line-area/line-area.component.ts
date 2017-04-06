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

	lineData: any;
	filterType: string = "line";
	searchExample: string = "Circle";
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

	getAllDelays() {
		this._delayFacade.getAllDelays("tube").then((response) => {
			this.delays = response;
		}, (err) => {
			this.handleError(err);
		});
	}

	getAllLinesStatuses() {
		return this._lineFacade.getAllLineStatuses(this._appConstants.app_travel_modes["tube"]);
	}

	getDlrStatus() {
		return this._lineFacade.getAllLineStatuses(this._appConstants.app_travel_modes["dlr"]);
	}

	getOvergroundStatus() {
		return this._lineFacade.getAllLineStatuses(this._appConstants.app_travel_modes["overground"]);
	}

	getRailStatus() {
		return this._lineFacade.getAllLineStatuses(this._appConstants.app_travel_modes["tfl-rail"]);
	}

	getTramStatus() {
		return this._lineFacade.getAllLineStatuses(this._appConstants.app_travel_modes["tram"]);
	}

	handleError(err) {
		console.log("error: ", err);
	}

}