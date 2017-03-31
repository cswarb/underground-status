import { Component, OnInit, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { lineService } from "./line.service";
import { delayService } from "../shared/delay/delay.service";

@Component({
	moduleId: module.id,
    selector: '',
    template: `
		<article class="">

            <div filters></div>

            <div emergency-delays [delays]="delays"></div>
            
            <section class="undergroundline">
            	<div class="undergroundline__lines">
    				<h2 class="undergroundline__title">All {{listType}}:</h2>
	            	<div line-list *ngFor="let line of allLineStatuses" [lineData]="line"></div>
           		</div>
            </section>

        </article>
    `
})
export class lineAreaComponent implements OnInit {

	lineData: any;
	filterType: string = "line";
	searchExample: string = "Circle";
	listType: string = "Lines";
	searchString: string = "";
	delays: any = [];
	allLineStatuses: any = [];

	constructor(private _lineService: lineService, private _delayService: delayService) {}
	
	ngOnInit() {
		this.getAllLinesStatuses();
		this.getAllDelays();
	}

	getAllDelays() {
		this._delayService.getAllDelays("tube").then((response) => {
			this.delays = response;
		}, (err) => {
			console.log(err);
		});
	}

	getAllLinesStatuses() {
		this._lineService.getAllLineStatuses("tube").then((response) => {
			this.allLineStatuses = response;
		}, (err) => {
			console.log("error: ", err);
		});
	}

}