import { Injectable } from "@angular/core";
import { Http, Response, URLSearchParams, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/Rx";
import { appConstants } from "../app.constants";


@Injectable()
export class lineService {

	constructor(private http: Http, private _appConstants: appConstants) {

	}

	getHeaders(): Headers {
		let headers = new Headers();
	    headers.append("Accept", "application/json");
	    return headers;
	}

	/**
	 * Used when the user clicks for more details of a specific line on the lineList components
	 * @param  {string}
	 * @return {promise}
	 */
	getDetailedLineInfo(lineId: string): Promise<any> {
		let params: URLSearchParams = new URLSearchParams();
		params.set("app_id", this._appConstants.app_api_id);
		params.set("app_key", this._appConstants.app_api_key);
		params.set("detail", this._appConstants.app_api_detailed_disruptions);
			
		return this.http
			.get(this._appConstants.api_base_url + "/Line/" + lineId + "/Disruption", 
				{
					headers: this.getHeaders()
				}
			)
			.map((res) => res.json())
			.toPromise()
			.catch(this.handleError);
	}

	/**
	 * Get all the possible lines
	 * Used on the stationArea component to then find all stations from the line
	 * @return {promise}
	 */
	getAllPossibleLines(): Promise<any> {
		let params: URLSearchParams = new URLSearchParams();
		params.set("detail", this._appConstants.app_api_detailed_disruptions);
		params.set("app_id", this._appConstants.app_api_id);
		params.set("app_key", this._appConstants.app_api_key);
			
		return this.http
			.get(this._appConstants.api_base_url + "/Line/Mode/tube", 
				{
					headers: this.getHeaders()
				}
			)
			.map((res) => res.json())
			.toPromise()
			.catch(this.handleError);
	}

	/**
	 * Used by the lineArea component to get all tube line statuses
	 * @param  {string}
	 * @return {promise}
	 */
	getAllLineStatuses(type: string): Promise<any> {
		let params: URLSearchParams = new URLSearchParams();
		params.set("app_id", this._appConstants.app_api_id);
		params.set("app_key", this._appConstants.app_api_key);
		params.set("detail", this._appConstants.app_api_detailed_disruptions);
			
		return this.http
			.get(this._appConstants.api_base_url + "/Line/Mode/" + type + "/Status", 
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