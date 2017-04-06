import { Component, OnInit, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output, EventEmitter } from "@angular/core";
import { Router, Params } from "@angular/router";
import { FormControl } from "@angular/forms";

import { lineFacade } from "../../line-area/line-facade.service";

@Component({
	moduleId: module.id,
    selector: "[line-list]",
    templateUrl: "./line-list.template.html"
})
export class lineListComponent implements OnInit {

	@Input() lineData: any;
	@Input() listType: any;
	detailedLineInfo: any = {};
	detailedViewLoading: boolean = false;
	detailedViewToggle: boolean;

	constructor(private _lineFacade: lineFacade){
		
	}
	
	ngOnInit() {
		
	}

	public expandLineInfo(line) {
		if(this.detailedViewToggle === true) {
			this.detailedViewToggle = false;
		} else if(this.detailedLineInfo.hasOwnProperty("description")) {
			this.detailedViewToggle = true;
		} else {
	    	this.getDetailedLineInfo(line);
		};
	}

	public sanitizeLineId(lineData) {
		if(lineData.modeName === "tube") {
			return lineData.id.replace(/-/g, "");
		} else {
			return lineData.modeName;
		};
	}

	public hasReason() {
		if(this.lineData.lineStatuses[0].reason) {
			return false;
		};
		return true;
	}

	private getDetailedLineInfo(line) {
		if(this.lineData.lineStatuses[0].hasOwnProperty("reason")) {
			this.detailedLineInfo = {
				"description": this.lineData.lineStatuses[0].reason
			};
		} else {
			this.detailedLineInfo = {
				"description": "No delays found for " + line.name
			};
		};
		
		this.detailedViewLoading = false;
		this.detailedViewToggle = true;
		
		// this._lineFacade.getDetailedLineInfo(line.id).then((response) => {
		// 	if(!response) {return false};
		// 	this.detailedViewToggle = true;
		// 	this.detailedViewLoading = false;
		// 	if(typeof response === "object" && response.length < 1) {
		// 		this.detailedLineInfo = {
		// 			"description": "No delays found for " + line.name
		// 		};
		// 	} else {
		// 		this.detailedLineInfo = {
		// 			"description": this.lineData.lineStatuses[0].reason
		// 		};
		// 	};
		// }, (err) => {
		// 	this.detailedViewToggle = true;
		// 	this.detailedViewLoading = false;
		// 	this.detailedLineInfo = {
		// 		"description": "Error: Could not get any data."
		// 	};
		// });
	}

}