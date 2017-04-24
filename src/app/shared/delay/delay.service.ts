import { Injectable } from "@angular/core";
import { Http, Response, URLSearchParams, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/Rx";
import { appConstants } from "../../app.constants";

import { delayModel } from "./delay.model";


@Injectable()
export class delayService {

	constructor(private http: Http, private _appConstants: appConstants) {

	}

	getHeaders(): Headers {
		let headers = new Headers();
	    headers.append("Accept", "application/json");
	    return headers;
	}

	/**
	 * Get any delays to send to the display component
	 * @param  {string}
	 * @return {promise}
	 */
	getAllDelays(mode: string): Promise<any> {
		let params: URLSearchParams = new URLSearchParams();

		params.set("app_id", this._appConstants.app_api_id);
		params.set("app_key", this._appConstants.app_api_key);
		params.set("detail", this._appConstants.app_api_detailed_disruptions);
			
		return this.http
			.get(this._appConstants.api_base_url + "/Line/Mode/" + mode + "/Disruption", 
				{
					headers: this.getHeaders()
				}
			)
			.map((res) => res.json())
			.toPromise()
			.catch(this.handleError);
	}

	handleError(error: any): Promise<any> {
		console.log("Error: ", error);
		return Promise.reject(error.message || error);
	}
	
}