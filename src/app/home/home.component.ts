import { Component, OnInit, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
	moduleId: module.id,
    selector: '',
    template: `
    	<router-outlet></router-outlet>
    `
})
export class homeComponent implements OnInit {

	constructor() {}
	
	ngOnInit() {

	}

}