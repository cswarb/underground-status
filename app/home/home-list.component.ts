import { Component, OnInit, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output } from '@angular/core';
import { Router, Params } from "@angular/router";
import { FormControl } from '@angular/forms';

@Component({
	moduleId: module.id,
    selector: '',
    template: `
		<p>Home sub-view - Item List</p>
		<ul>
			<li *ngFor="let item of crisis">
				<a [routerLink]="['/detail']">{{item.name}}</a>
			</li>
		</ul>	
		<router-outlet></router-outlet>	
    `
})
export class homeListComponent implements OnInit {

	crisis: any;

	constructor(private router: Router){}
	
	ngOnInit() {
		this.crisis = [{
			"name": "Cookies",
			"id": 1
		},{
			"name": "Cakes",
			"id": 2
		},{
			"name": "Biscuits",
			"id": 3
		}]; 
	}

}