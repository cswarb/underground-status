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

	expandLineInfo(line) {
		if(this.detailedViewToggle === true) {
			this.detailedViewToggle = false;
		} else if(this.detailedLineInfo.hasOwnProperty("description")) {
			this.detailedViewToggle = true;
		} else {
			this.detailedViewLoading = true;
	    	this.getDetailedLineInfo(line);
		}
	}

	sanitizeLineId(line) {
		return line.replace(/-/g, "");
	}

	getDetailedLineInfo(line) {
		this._lineFacade.getDetailedLineInfo(line.id).then((response) => {
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