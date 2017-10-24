import { Component, OnInit, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Resolve, ActivatedRoute } from "@angular/router";
import { stationFacade } from "./station-facade.service";
import { lineFacade } from "../line-area/line-facade.service";
import { delayFacade } from "../shared/delay/delay-facade.service";
import { stationListModel } from "./station-list.model";
import { stationInfoModel } from "./station-info.model";

@Component({
	moduleId: module.id,
    selector: "",
    templateUrl: "./station-area.component.html"
})
export class stationAreaComponent implements OnInit {

	filterType: string = "station";
	searchExample: string = "Bank";
	searchString: any = {
		"search": ""
	};
	searchResults: stationInfoModel[] = [];
	allLines: Array<string> = [];

	public stationsList: stationListModel[] = [];
	itemsProcessed: number = 0;

	constructor(private _stationFacade: stationFacade,
		private _delayFacade: delayFacade,
		private _lineFacade: lineFacade,
		private route: ActivatedRoute) {}
	
	ngOnInit() {
		//Determine if we should get a new list of stations, or ones from cache
		if(!this._stationFacade.getStations()) {
			this.getResolveData((lines) => {
				this.getAllStations(lines);	
			});			
		} else {
			//Get from cache
			this.stationsList = this._stationFacade.getStations();
		};	
	}

	private getResolveData(callback: any): void {
		let lines = this.route.snapshot.data["lines"].map(function(value: any, iterator: number) {
			return value.id;
		});
		callback(lines);
	}

	public searchResultHasUpdated(delta: any): void {
		this.searchResults = delta;
	}

	public clearTheSearchResult(delta: any): void {
		let index = this.searchResults.indexOf(delta);
  		this.searchResults.splice(index, 1);  
		this.searchString.search = "";
	}

	private createStationLookup(lineId: string, stationsForLine: any): void {
		let stations = stationsForLine;

		stations.map((value: stationListModel, iterator: number) => {
			if(this._stationFacade.isTubeStationType(value) && value.hasOwnProperty("commonName") && value.hasOwnProperty("naptanId")) {
				this.stationsList.push({
					"parentLine": lineId,
					"stationName": value["commonName"],
					"naptanId": value["naptanId"]
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

	private getAllStations(lines): void {
		//Go through each of the lines, get all stations from them, and create a lookup object
		//so we can use this data as autocomplete data, search and filter stations at a later point in time
		this.allLines = lines.forEach((lineId) => {
			this._stationFacade.getStationsFromLine(lineId).then((response) => {
				this.itemsProcessed++;
				this.createStationLookup(lineId, response);
				if(this.itemsProcessed === lines.length){
					this.stationListReady();
				};
			});
		});
	}

}