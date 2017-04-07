import { Injectable } from "@angular/core";
import { Http, Response, URLSearchParams, Headers } from "@angular/http";

import { appConstants } from "../../app.constants";

@Injectable()
export class searchService {

	constructor(private http: Http, private _appConstants: appConstants) {

	};

	getHeaders(): Headers {
		let headers = new Headers();
	    headers.append("Accept", "application/json");
	    return headers;
	};

	/**
	 * Get a station disruption
	 * Used when clicking an autocomplete result
	 * @param  {string}
	 * @return {promise}
	 */
	queryStation(naptanId: string): Promise<any> {
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
	};

	handleError(error: any): Promise<any> {
		console.log("Error: ", error);
		return Promise.reject(error.message || error);
	};

}