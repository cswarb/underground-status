import { Injectable } from "@angular/core";
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { appConstants } from "../app.constants";


@Injectable()
export class stationService {

	stations: any = null;

	constructor(private http: Http, private _appConstants: appConstants) {

	}

	getHeaders() {
		let headers = new Headers();
	    headers.append('Accept', 'application/json');
	    return headers;
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
		let params: URLSearchParams = new URLSearchParams();

		params.set("app_id", this._appConstants.app_api_id);
		params.set("app_key", this._appConstants.app_api_key);
		params.set("detail", this._appConstants.app_api_detailed_disruptions);
			
		return this.http
			.get(this._appConstants.api_base_url + "/Line/" + lineId + "/StopPoints", 
				{
					headers: this.getHeaders(),
					search: params
				}
			)
			.map((res) => res.json())
			.toPromise()
			.catch(this.handleError);
	}

	handleError(err) {
		console.log("Error", err);
	}
	
}