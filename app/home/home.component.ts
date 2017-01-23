import { Component, OnInit, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
	moduleId: module.id,
    selector: '',
    template: `
		<h2>Home</h2>
		<router-outlet></router-outlet>
    `
})
export class homeComponent implements OnInit {


	
	ngOnInit() {
		
	}

}