import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';

import { appConstants } from "../app.constants";

@Injectable()
export class searchService {
	constructor(private http: Http, private _appConstants: appConstants) {

	};

	queryLineList = (searchTerm) => {
		let params: URLSearchParams = new URLSearchParams();
			params.set("detail", this._appConstants.app_detail);
			params.set("app_id", this._appConstants.app_id);
			params.set("app_key", this._appConstants.app_key);
			
		return this.http
		.get(this._appConstants.api_base_url + "Line/" + this.cleanSearchTerm(searchTerm)  + "/Status", 
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
