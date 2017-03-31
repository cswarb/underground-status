import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, Headers } from '@angular/http';

import { appConstants } from "../app.constants";

@Injectable()
export class searchService {

	autoCompleteVals = [];

	constructor(private http: Http, private _appConstants: appConstants) {

	};

	getHeaders = () => {
		let headers = new Headers();
	    headers.append('Accept', 'application/json');
	    return headers;
	};

	/**
	 * Set all possible stations.
	 * Used by the autocomplete search
	 * @return {array}
	 */
	setAutoCompleteVals(autoCompleteVals) {
		this.autoCompleteVals = autoCompleteVals;
	}

	/**
	 * Return all possible stations.
	 * Used by the autocomplete search
	 * @return {array}
	 */
	getAutoCompleteVals() {
		return this.autoCompleteVals;
	}

	/**
	 * See if a string passed in matches an existing one
	 * @param  {string}
	 * @return {boolean}
	 */
	isNaptanId(naptanId) {
		for (var key in this.autoCompleteVals) {
		    if (!this.autoCompleteVals.hasOwnProperty(key)) continue;

		    var obj = this.autoCompleteVals[key];
		    if(naptanId === obj.naptanId){
		    	return true;
		    };
		}
		return false;
	}

	/**
	 * Get the naptanId from the stationName
	 * @param  {string}
	 * @return {string}
	 */
	getNaptanId(stationName: string) {
		for (var key in this.autoCompleteVals) {
		    if (!this.autoCompleteVals.hasOwnProperty(key)) continue;

		    var obj = this.autoCompleteVals[key];
		    for (var prop in obj) {
		        if(!obj.hasOwnProperty(prop)) continue;
		        if(stationName === obj[prop].stationName) {
		        	return obj[prop].naptanId;
		        };
		    }
		}
		return false;
	}

	/**
	 * Get a station disruption
	 * Used when clicking an autocomplete result
	 * @param  {string}
	 * @return {promise}
	 */
	queryStation(naptanId: string) {
		let params: URLSearchParams = new URLSearchParams();
		// let myBool: boolean = false;

			// params.set("getFamily", myBool);
			params.set("app_id", this._appConstants.app_api_id);
			params.set("app_key", this._appConstants.app_api_key);
			
		return this.http
			.get(this._appConstants.api_base_url + "/StopPoint/" + naptanId  + "/Disruption", 
				{
					headers: this.getHeaders(), 
					search: params
				}
			)
			.map((res) => res.json())
			.toPromise()
			.catch(this.handleError);
	}

	handleError = (error) => {

	};

	

}

