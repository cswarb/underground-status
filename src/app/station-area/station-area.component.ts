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
	searchString: string = "";
	searchResults: any = [];
	allLines: any = [];
	delays: any = [];

	stationsList: any = [];
	itemsProcessed: number = 0;

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

	public searchResultHasUpdated(delta: any): void {
		this.searchResults = delta;
	}

	public clearTheSearchResult(delta: any): void {		
		let index = this.searchResults.indexOf(delta);
  		this.searchResults.splice(index, 1);  
		this.searchString = "";
	}

	private getAllDelays(): void {
		this._delayFacade.getAllDelays("tube").then((response) => {
			this.delays = response;
		}, (err) => {
			console.log(err);
		});
	}

	private createStationLookup(lineId: number, stationsForLine: any): void {
		let stations = stationsForLine;

		stations.map((value: any, iterator: number) => {
			if(this._stationFacade.isTubeStationType(value) && value.hasOwnProperty("commonName") && value.hasOwnProperty("naptanId")) {
				this.stationsList.push({
					"parentLine": lineId,
					"stationName": value.commonName,
					"naptanId": value.naptanId
				});
			};
		});
	}

	private stationListReady(): void {
		//Set the stations to cache them
		this._stationFacade.setStations(this.stationsList);
		//Assign them to the components model value
		this.stationsList = this._stationFacade.getStations();
	}

	private getAllStations(): void {
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

	private getAllLines(callback: any): any {
		//Get all the possible lines
		return this._lineFacade.getAllPossibleLines().then((response) => {
			//Convert to array of line id only
			this.allLines = response.map(function(value: any, iterator: number){
				return value.id;
			});
			callback();
		}, (err) => {
			console.log("error: ", err);
		});
	}

}