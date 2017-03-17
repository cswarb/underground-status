import { Component, OnInit, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { stationService } from "./station.service";
import { delayService } from "../shared/delay/delay.service";

@Component({
	moduleId: module.id,
    selector: '',
    template: `
		<article class="">

            <filters style="display:block;width:100%"></filters>

            <emergency-delays [delays]="delays"></emergency-delays>
            
            <section class="undergroundline">
	            <search [filterType]="filterType" [searchExample]="searchExample" style="display:block;width:100%"></search>

	            <line-list [popularItems]="popularStations" [listType]="listType" style="display:block;width:100%"></line-list>
            </section>
                  
        </article>
    `
})
export class stationAreaComponent implements OnInit {

	filterType: string = "station";
	searchExample: string = "Bank";
	listType: string = "Stations";

	constructor(private _stationService: stationService, private _delayService: delayService) {}
	
	ngOnInit() {
		this.getAllStations();		
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

	getAllStations() {
		this._stationService.getAllPossibleStations().then((response) => {

			//Filter some popular lines - just get every couple for now
			this.popularStations = response.filter(function(value, iterator){
				if(iterator % 2){
					return value;
				};
			});

			//Convert to array of name only
			this.popularStationsArray = this.popularStations.map(function(value, iterator){
				return value.id;
			});

			//Get line statuses passing an array and reassign popularStations
			this._stationService.getPopularStationStatuses(this.popularStationsArray).then((popularStationsData) => {
				this.popularStations = popularStationsData;
			}, function(err){
				console.log("error: ", err);
			});
		}, (err) => {
			console.log("error: ", err);
		});
	}

}