import { Component, OnInit, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output, EventEmitter } from "@angular/core";
import { Router, Params } from "@angular/router";
import { FormControl } from "@angular/forms";

import { lineFacade } from "../../line-area/line-facade.service";

import { lineDataModel, lineDisruptionDataModel } from "../line-data.model";
import { detailedLineDataModel } from "../detailed-line-data.model";

@Component({
	moduleId: module.id,
    selector: "[line-list]",
    templateUrl: "./line-list.template.html"
})
export class lineListComponent implements OnInit {

	@Input() lineData: lineDataModel = new lineDataModel();
	detailedLineInfo: detailedLineDataModel[];
	detailedViewLoading: boolean = false;
	detailedViewToggle: boolean = false;
	statusSeverityDescriptionArray = [];

	constructor(private _lineFacade: lineFacade){

	}
	
	ngOnInit() {
		//If there is a repeated lineStatus string, then don't bother to display it.
		//Form a new array holding the minimal values that describe all possible statuses
		//contained in the more info section
		this.lineData.lineStatuses.forEach((line) => {
			//Check if the description already exists
			if(!this.descriptionAlreadyExists(line)) {
				//Push it into the array to loop through
				this.statusSeverityDescriptionArray.push(line);
			};
		});
	}

	private descriptionAlreadyExists(line): boolean {
		let exists = false;
		this.statusSeverityDescriptionArray.forEach((lineStatusArrayValue) => {
			if(line.statusSeverityDescription === lineStatusArrayValue.statusSeverityDescription) {
				exists = true;
			};
		});
		return exists;
	}

	public isFuture(validityArray: any): boolean {
		return validityArray.some((value, iterator) => {
			return !value.isNow;
		});
	}

	public expandLineInfo(): void {
		if(this.detailedViewToggle === true) {
			this.detailedViewToggle = false;
		} else if(this.detailedLineInfo) {
			this.detailedViewToggle = true;
		} else {
	    	this.getDetailedLineInfo();
		};
	}

	public sanitizeLineId(lineData: lineDataModel): string {
		if(lineData.modeName === "tube") {
			return lineData.id.replace(/-/g, "");
		} else {
			return lineData.modeName;
		};
	}

	public hasReason(): boolean {
		if(this.lineData.lineStatuses[0].reason) {
			return true;
		};
		return false;
	}

	private getDetailedLineInfo(): void {
		if(this.lineData.hasOwnProperty("lineStatuses")) {
			this.detailedLineInfo = this.lineData.lineStatuses;
		};
		this.detailedViewLoading = false;
		this.detailedViewToggle = true;
	}

}