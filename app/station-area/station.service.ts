import { Injectable } from "@angular/core";
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { appConstants } from "../app.constants";


@Injectable()
export class stationService {

	stations = null;

	constructor(private http: Http, private _appConstants: appConstants) {

	}

	getHeaders() {
		let headers = new Headers();
	    headers.append('Accept', 'application/json');
	    return headers;
	}

	setStations(stations) {
		this.stations = stations;
	}

	getStations() {
		return this.stations;
	}

	getStationsFromLine(lineId) {
		let params: URLSearchParams = new URLSearchParams();

		params.set("detail", this._appConstants.app_detail);
		params.set("app_id", this._appConstants.app_id);
		params.set("app_key", this._appConstants.app_key);
			
		return this.http
			.get(this._appConstants.api_base_url + "Line/" + lineId + "/StopPoints", 
				{
					headers: this.getHeaders(),
					search: params
				}
			)
			.map((res) => res.json())
			.toPromise()
			.catch(this.handleError);
	}

	isTubeStationType(val) {
		if(val.modes.indexOf("tube") > -1) {
			return true;
		};
		return false;
	}

	getAllPossibleStations() {
		return this.stationsList;
	}

	getPopularStationStatuses(ids) {
		let params: URLSearchParams = new URLSearchParams();
		params.set("detail", this._appConstants.app_detail);
		params.set("app_id", this._appConstants.app_id);
		params.set("app_key", this._appConstants.app_key);
			
		return this.http
			.get(tfl.api_base_url + "/Line/" + ids + "/Status", 
				{
					headers: this.getHeaders(),
					search: params
				}
			)
			.map((res) => res.json())
			.toPromise()
			.catch(this.handleError);
	}

	getStation(id) {
		let params: URLSearchParams = new URLSearchParams();
		params.set("detail", this._appConstants.app_detail);
		params.set("app_id", this._appConstants.app_id);
		params.set("app_key", this._appConstants.app_key);
			
		return this.http
			.get(tfl.api_base_url + "/Line/" + id + "/Status", 
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