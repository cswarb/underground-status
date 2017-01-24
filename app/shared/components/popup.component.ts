import { Component, OnInit, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output, HostBinding } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

import { slideInDownAnimation }   from '../../animations';

@Component({
	moduleId: module.id,
    selector: '',
    template: `
		<div class="popup">
			<h2>Popup</h2>
			<button type="button" (click)="close()">Close</button>
		</div>	
    `,
    styles: [
    `
		.popup {
			position: fixed;
			bottom: 0;
			right: 1rem;
			background-color: #fff;
			width: 20rem;
			height: auto;
			display: block;
			border: 1px solid grey;
		    border-radius: 3px;
		    padding: 1rem;
		    font-family: sans-serif;
		}	
    `
    ],
    animations: [
    	slideInDownAnimation
    ]
})
export class popupComponent implements OnInit {

	@HostBinding('@routeAnimation') routeAnimation = true;

	constructor(private router: Router){}	

	ngOnInit() {
		
	}

	close() {
		this.router.navigate([{ outlets: { popup: null }}]);
	}

}