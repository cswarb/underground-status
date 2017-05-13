import { Component, OnInit, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output, EventEmitter } from "@angular/core";
import { Router, Params } from "@angular/router";
import { FormControl } from "@angular/forms";

import { lineFacade } from "../../line-area/line-facade.service";

import { lineDataModel } from "../line-data.model";
import { detailedLineDataModel } from "../detailed-line-data.model";

@Component({
	moduleId: module.id,
    selector: "[line-list]",
    templateUrl: "./line-list.template.html"
})
export class lineListComponent implements OnInit {

	@Input() lineData: lineDataModel = new lineDataModel();
	detailedLineInfo: detailedLineDataModel = new detailedLineDataModel("");
	detailedViewLoading: boolean = false;
	detailedViewToggle: boolean = false;

	constructor(private _lineFacade: lineFacade){

	}
	
	ngOnInit() {

	}

	public isNow(validityArray: any): boolean {
		return validityArray.some((value, iterator) => {
			return !value.isNow;
		});
	}

	public expandLineInfo(line: any): void {
		if(this.detailedViewToggle === true) {
			this.detailedViewToggle = false;
		} else if(this.detailedLineInfo.hasOwnProperty("description") && this.detailedLineInfo.description) {
			this.detailedViewToggle = true;
		} else {
	    	this.getDetailedLineInfo(line);
		};
	}

	public sanitizeLineId(lineData: any): string {
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

	private getDetailedLineInfo(line: any): void {
		if(this.lineData.lineStatuses[0].hasOwnProperty("reason")) {
			this.detailedLineInfo.description = this.lineData.lineStatuses[0].reason;
		} else {
			this.detailedLineInfo.description = "No delays found for " + line.name;
		};
		
		this.detailedViewLoading = false;
		this.detailedViewToggle = true;
	}

}