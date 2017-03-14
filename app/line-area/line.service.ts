import { Injectable } from "@angular/core";
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';


@Injectable()
export class lineService {
	apiUrl: string = "/app/shared/services/";

	constructor(private http: Http) {
		this.tfl = {};
		this.tfl.api_base_url = "https://api.tfl.gov.uk/";
      	this.tfl.app_id = "cd8b67bd";
      	this.tfl.app_key = "e64e8650106cda51cac3339611c63202";
      	this.tfl.detail = "true";
	}

	getHeaders() {
		let headers = new Headers();
	    headers.append('Accept', 'application/json');
	    return headers;
	}

	getAllPossibleLines() {
		let params: URLSearchParams = new URLSearchParams();
		params.set("detail", this.tfl.detail);
		params.set("app_id", this.tfl.app_id);
		params.set("app_key", this.tfl.app_key);
			
		return this.http
			.get(tfl.api_base_url + "/Line/Mode/tube", 
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
		params.set("detail", this.tfl.detail);
		params.set("app_id", this.tfl.app_id);
		params.set("app_key", this.tfl.app_key);
			
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

	handleError() {
		console.log("Error");
	}
	
}