import { Injectable } from "@angular/core";
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { appConstants } from "../app.constants";


@Injectable()
export class lineService {

	constructor(private http: Http, private _appConstants: appConstants) {

	}

	getHeaders() {
		let headers = new Headers();
	    headers.append('Accept', 'application/json');
	    return headers;
	}

	getDetailedLineInfo(lineId) {
		let params: URLSearchParams = new URLSearchParams();

		params.set("detail", this._appConstants.app_detail);
		params.set("app_id", this._appConstants.app_id);
		params.set("app_key", this._appConstants.app_key);
			
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

	getAllPossibleLines() {
		let params: URLSearchParams = new URLSearchParams();

		params.set("detail", this._appConstants.app_detail);
		params.set("app_id", this._appConstants.app_id);
		params.set("app_key", this._appConstants.app_key);
			
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

	getPopularLineStatuses(ids) {
		let params: URLSearchParams = new URLSearchParams();
		params.set("detail", this._appConstants.app_detail);
		params.set("app_id", this._appConstants.app_id);
		params.set("app_key", this._appConstants.app_key);
			
		return this.http
			.get(tfl.api_base_url + "/Line/" + ids + "/Status", 
				{
					headers: this.getHeaders()
				}
			)
			.map((res) => res.json())
			.toPromise()
			.catch(this.handleError);
	}

	getAllLineStatuses(type) {
		let params: URLSearchParams = new URLSearchParams();
		params.set("detail", this._appConstants.app_detail);
		params.set("app_id", this._appConstants.app_id);
		params.set("app_key", this._appConstants.app_key);
			
		return this.http
			.get(tfl.api_base_url + "/Line/Mode/" + type + "/Status", 
				{
					headers: this.getHeaders()
				}
			)
			.map((res) => res.json())
			.toPromise()
			.catch(this.handleError);
	}

	handleError() {
		console.log("Error");
	}
	
}