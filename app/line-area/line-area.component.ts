import { Component, OnInit, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { lineService } from "./line.service";
import { delayService } from "../shared/delay/delay.service";

@Component({
	moduleId: module.id,
    selector: '',
    template: `
		<article class="">

            <filters></filters>

            <emergency-delays [delays]="delays"></emergency-delays>
            
            <section class="undergroundline">
	            <line-list (detailedLineEvent)="getDetailedLineInfo($event)" [detailedViewToggle]="detailedViewToggle" [detailedLineInfo]="detailedLineInfo" [popularItems]="popularLines" [listType]="listType"></line-list>
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
	detailedLineInfo: [];
	detailedViewToggle = false;

	constructor(private _lineService: lineService, private _delayService: delayService) {}
	
	ngOnInit() {
		this.getAllLines();
		this.getAllDelays();
	}

	getDetailedLineInfo(line) {
		this._lineService.getDetailedLineInfo(line.id).then((response) => {
			if(!response) {return false};
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
			this.detailedLineInfo = {
				"description": "Error: Could not get any data."
			};
		});
	}

	getAllDelays() {
		this._delayService.getAllDelays("tube").then((response) => {
			this.delays = response;
		}, (err) => {
			console.log(err);
		});
	}

	getAllLines() {
		this._lineService.getAllPossibleLines().then((response) => {

			this.popularLines = response.filter((value, iterator) => {
				// if(iterator % 2){
					return value;
				// };
			});

			//Convert to array of names only
			this.popularLinesArray = this.popularLines.map((value, iterator) => {
				return value.id;
			});

			//Get line statuses passing an array and reassign popularLines
			this._lineService.getPopularLineStatuses(this.popularLinesArray).then((popularLinesData) => {
				this.popularLines = popularLinesData;
			}, (err) => {
				console.log("error: ", err);
			});
		}, (err) => {
			console.log("error: ", err);
		});
	}

}