import { Injectable } from "@angular/core";
import { Http, Response, URLSearchParams, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/Rx";
import { appConstants } from "../app.constants";
import { stationService } from "./station.service";


@Injectable()
export class stationFacade {

	stations: any = null;

	constructor(private _stationService: stationService) {

	}

	/**
	 * Set stations array
	 * @param {array}
	 */
	setStations(stations) {
		this.stations = stations;
	}

	/**
	 * Return station array
	 * @return {array}
	 */
	getStations() {
		return this.stations;
	}

	/**
	 * Test if the array key contains the tube type
	 * @param  {array}
	 * @return {boolean}
	 */
	isTubeStationType(val) {
		if(val.modes.indexOf("tube") > -1) {
			return true;
		};
		return false;
	}

	/**
	 * Get all stations from a line
	 * @param  {string}
	 * @return {promise}
	 */
	getStationsFromLine(lineId: string) {
		return this._stationService.getStationsFromLine(lineId);
	}
	
}