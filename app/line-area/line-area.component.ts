import { Component, OnInit, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { lineService } from "./line.service";
import { delayService } from "../shared/delay/delay.service";

@Component({
	moduleId: module.id,
    selector: '',
    template: `
		<article class="">

            <filters style="display:block;width:100%"></filters>

            <emergency-delays [delays]="delays"></emergency-delays>
            
            <section class="undergroundline">
	            <search [filterType]="filterType" [searchExample]="searchExample" [searchData]="searchData" style="display:block;width:100%"></search>

	            <line-list [popularItems]="popularLines" style="display:block;width:100%"></line-list>
            </section>

        </article>
    `
})
export class lineAreaComponent implements OnInit {

	lineData: any;
	filterType: string = "line";
	searchExample: string = "Circle";
	searchData: any = {"search": "data"};

	constructor(private _lineService: lineService, private _delayService: delayService) {}
	
	ngOnInit() {
		this.getAllLines();
		this.getAllDelays();
	}

	getAllDelays() {
		this._delayService.getAllDelays("tube").then((response) => {
			this.delays = response;
			console.log(response);
		}, (err) => {
			console.log(err);
		});
	}

	getAllLines() {
		this._lineService.getAllPossibleLines().then((response) => {

			//Filter some popular lines - just get every couple for now
			this.popularLines = response.filter(function(value, iterator){
				if(iterator % 2){
					return value;
				};
			});

			//Convert to array of name only
			this.popularLinesArray = this.popularLines.map(function(value, iterator){
				return value.id;
			});

			//Get line statuses passing an array and reassign popularLines
			this._lineService.getPopularLineStatuses(this.popularLinesArray).then((popularLinesData) => {
				this.popularLines = popularLinesData;
			}, function(err){
				console.log("error: ", err);
			});
		}, (err) => {
			console.log("error: ", err);
		});
	}

}