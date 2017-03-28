import { Component, OnInit, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output, EventEmitter } from '@angular/core';
import { Router, Params } from "@angular/router";
import { FormControl } from '@angular/forms';

import { lineService } from "../../line-area/line.service";

@Component({
	moduleId: module.id,
    selector: '[line-list]',
    templateUrl: "./line-list.template.html"
})
export class lineListComponent implements OnInit {

	@Input() lineData;
	@Input() listType;

	detailedLineInfo = {};
	detailedViewLoading: boolean = false;

	constructor(private _lineService: lineService){}
	
	ngOnInit() {
		
	}

	expandLineInfo(line) {
		if(this.detailedViewToggle === true) {
			this.detailedViewToggle = false;
			this.detailedViewLoading = false;
		} else if(this.detailedLineInfo.hasOwnProperty("description")) {
			this.detailedViewToggle = true;
			this.detailedViewLoading = true;
		} else {
	    	this._lineService.getDetailedLineInfo(line.id).then((response) => {
				if(!response) {return false};
				this.detailedViewToggle = true;
				this.detailedViewLoading = false;
				if(typeof response === "object" && response.length < 1) {
					this.detailedLineInfo = {
						"description": "No delays found for " + line.name
					};
				} else {
					this.detailedLineInfo = {
						"description": response[0].description
					};
				};
			}, (err) => {
				this.detailedViewToggle = true;
				this.detailedViewLoading = false;
				this.detailedLineInfo = {
					"description": "Error: Could not get any data."
				};
			});
		}
	}

	sanitizeLineId(line) {
		return line.replace(/-/g, "");
	}

}