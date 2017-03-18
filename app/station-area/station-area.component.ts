import { Component, OnInit, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { stationService } from "./station.service";
import { lineService } from "../line-area/line.service";
import { delayService } from "../shared/delay/delay.service";

@Component({
	moduleId: module.id,
    selector: '',
    template: `
		<article class="">

            <filters style="display:block;width:100%"></filters>

            <emergency-delays [delays]="delays"></emergency-delays>
            
            <section class="undergroundline">
	            <search [filterType]="filterType" [searchExample]="searchExample" [searchString]="searchString" [autoCompleteVals]="stationsList" style="display:block;width:100%"></search>
				
	            <search-results [searchResults]="searchResults" style="display:block;width:100%"></search-results>
            </section>
                  
        </article>
    `
})
export class stationAreaComponent implements OnInit {

	filterType: string = "station";
	searchExample: string = "Bank";
	listType: string = "Stations";
	searchString: string = "";
	searchResults = [null];
	allLines = [];

	stationsList = {};
	itemsProcessed = 0;

	constructor(private _stationService: stationService, private _delayService: delayService, private _lineService: lineService) {}
	
	ngOnInit() {
		//Determine if we should get a new list of stations, or ones from cache
		if(!this._stationService.getStations()) {
			this.getAllLines(() => {
				this.getAllStations();	
			});			
		} else {
			this.stationsList = this._stationService.getStations();
		};

		//Get all the delays
		this.getAllDelays();		
	}

	getAllDelays() {
		this._delayService.getAllDelays("tube").then((response) => {
			this.delays = response;
		}, (err) => {
			console.log(err);
		});
	}

	createStationLookup(lineId, stationsForLine) {
		let stations = stationsForLine;

		if(!this.stationsList[lineId]) {
			this.stationsList[lineId] = [];
		};

		stations.map((value, iterator) => {
			if(this._stationService.isTubeStationType(value) && value.hasOwnProperty("commonName") && value.hasOwnProperty("naptanId")) {
				this.stationsList[lineId].push({
					"stationName": value.commonName,
					"naptanId": value.naptanId
				});
			};
		});
	}

	stationListReady() {
		//Set the stations to cache them
		this._stationService.setStations(this.stationsList);
		//Assign them to the components model value
		this.stationsList = this._stationService.getStations();
	}

	getAllStations() {
		//Go through each of the lines, get all stations from them, and create a lookup object
		//so we can use this data as autocomplete data, search and filter stations at a later point in time
		this.allLines.forEach((lineId) => {
			this._stationService.getStationsFromLine(lineId).then((response) => {
				this.itemsProcessed++;
				this.createStationLookup(lineId, response);
				if(this.itemsProcessed === this.allLines.length){
					this.stationListReady();
				};
			});
		});
	}

	getAllLines(callback) {
		//Get all the possible lines
		this._lineService.getAllPossibleLines().then((response) => {
			//Convert to array of line id only
			this.allLines = response.map(function(value, iterator){
				return value.id;
			});
			callback();
		}, (err) => {
			console.log("error: ", err);
		});
	}

}