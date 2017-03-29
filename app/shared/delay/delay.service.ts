import { Injectable } from "@angular/core";
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { appConstants } from "../../app.constants";


@Injectable()
export class delayService {

	constructor(private http: Http, private _appConstants: appConstants) {

	}

	getHeaders() {
		let headers = new Headers();
	    headers.append('Accept', 'application/json');
	    return headers;
	}

	/**
	 * Get any delays to send to the display component
	 * @param  {string}
	 * @return {promise}
	 */
	getAllDelays(mode: string) {
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

	handleError(err) {
		console.log("Error", err);
	}
	
}