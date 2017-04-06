import { Component, OnInit, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output } from "@angular/core";
import { FormControl } from "@angular/forms";
import { stationFacade } from "./station-facade.service";
import { lineFacade } from "../line-area/line-facade.service";
import { delayFacade } from "../shared/delay/delay-facade.service";

@Component({
	moduleId: module.id,
    selector: "",
    templateUrl: "./station-area.component.html"
})
export class stationAreaComponent implements OnInit {

	filterType: string = "station";
	searchExample: string = "Bank";
	listType: string = "Stations";
	searchString: string = "";
	searchResults = [];
	allLines = [];
	delays = [];

	stationsList = [];
	itemsProcessed = 0;

	constructor(private _stationFacade: stationFacade, private _delayFacade: delayFacade, private _lineFacade: lineFacade) {}
	
	ngOnInit() {
		//Determine if we should get a new list of stations, or ones from cache
		if(!this._stationFacade.getStations()) {
			this.getAllLines(() => {
				this.getAllStations();	
			});			
		} else {
			this.stationsList = this._stationFacade.getStations();
		};

		//Get all the delays
		this.getAllDelays();		
	}

	searchResultHasUpdated(delta) {
		this.searchResults = delta;
	}

	clearTheSearchResult(delta) {		
		let index = this.searchResults.indexOf(delta);
  		this.searchResults.splice(index, 1);  
		this.searchString = "";
	}

	getAllDelays() {
		this._delayFacade.getAllDelays("tube").then((response) => {
			this.delays = response;
		}, (err) => {
			console.log(err);
		});
	}

	createStationLookup(lineId, stationsForLine) {
		let stations = stationsForLine;

		stations.map((value, iterator) => {
			if(this._stationFacade.isTubeStationType(value) && value.hasOwnProperty("commonName") && value.hasOwnProperty("naptanId")) {
				this.stationsList.push({
					"parentLine": lineId,
					"stationName": value.commonName,
					"naptanId": value.naptanId
				});
			};
		});
	}

	stationListReady() {
		//Set the stations to cache them
		this._stationFacade.setStations(this.stationsList);
		//Assign them to the components model value
		this.stationsList = this._stationFacade.getStations();
	}

	getAllStations() {
		//Go through each of the lines, get all stations from them, and create a lookup object
		//so we can use this data as autocomplete data, search and filter stations at a later point in time
		this.allLines.forEach((lineId) => {
			this._stationFacade.getStationsFromLine(lineId).then((response) => {
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
		this._lineFacade.getAllPossibleLines().then((response) => {
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