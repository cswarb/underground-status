import { Component, OnInit, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output } from '@angular/core';
import { Router, Params } from "@angular/router";
import { FormControl } from '@angular/forms';

@Component({
	moduleId: module.id,
    selector: 'line-list',
    templateUrl: "./line-list.template.html"
})
export class lineListComponent implements OnInit {

	@Input() popularItems;

	constructor(){}
	
	ngOnInit() {
		
	}

	sanitizeLineId(line) {
		return line.replace(/-/g, "");
	}

}