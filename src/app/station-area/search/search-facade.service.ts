import { Injectable } from "@angular/core";
import { Http, Response, URLSearchParams, Headers } from "@angular/http";

import { appConstants } from "../../app.constants";
import { searchService } from "./search.service";

@Injectable()
export class searchFacade {

	autoCompleteVals = [];

	constructor(private _searchService: searchService) {

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
		return this._searchService.queryStation(naptanId);
	}

}