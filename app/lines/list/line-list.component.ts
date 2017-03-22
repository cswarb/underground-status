import { Component, OnInit, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output, EventEmitter } from '@angular/core';
import { Router, Params } from "@angular/router";
import { FormControl } from '@angular/forms';

@Component({
	moduleId: module.id,
    selector: 'line-list',
    templateUrl: "./line-list.template.html"
})
export class lineListComponent implements OnInit {

	@Input() allLineStatuses;
	@Input() listType;
	@Input() detailedLineInfo;
	@Input() detailedViewToggle = false;

	constructor(){}
	
	ngOnInit() {
		
	}

	@Output() detailedLineEvent = new EventEmitter();
	expandLineInfo(line) {
		this.detailedViewToggle = !this.detailedViewToggle;
    	this.detailedLineEvent.next(line);
	}

	sanitizeLineId(line) {
		return line.replace(/-/g, "");
	}

}