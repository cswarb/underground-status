import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';

@Injectable()
export class searchService {
	constructor(private http: Http) {
		this.tfl = {};
		this.tfl.api_base_url = "https://api.tfl.gov.uk/";
      	this.tfl.app_id = "cd8b67bd";
      	this.tfl.app_key = "e64e8650106cda51cac3339611c63202";
      	this.tfl.detail = "true";
	};

	queryLineList = (searchTerm) => {
		let params: URLSearchParams = new URLSearchParams();
			params.set("detail", this.tfl.detail);
			params.set("app_id", this.tfl.app_id);
			params.set("app_key", this.tfl.app_key);
			
		return this.http
		.get(tfl.api_base_url + "Line/" + this.cleanSearchTerm(searchTerm)  + "/Status", 
			{
				headers: this.getHeaders(), 
				search: params
			}
		)
		.map((res) => res.json())
		.toPromise()
		.catch(this.handleError);
	};

	transformResponse = (res: any) => {
		let lineData = [];

		for (var i = 0; i < res.length; i++) {
			let line = res[i];
			console.log(line);
			lineData.push(line);
		};

		return lineData;

		// let line = {
		// 	name: res.name;
		// };
	};

	queryStationList = (searchTerm) => {
		
	};

	cleanSearchTerm = (searchTerm) => {
		return searchTerm;
	};

	handleError = (error) => {

	};

	getHeaders = () => {
		let headers = new Headers();
	    headers.append('Accept', 'application/json');
	    return headers;
	};

}

