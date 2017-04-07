import { Injectable } from "@angular/core";
import { Http, Response, URLSearchParams } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/Rx";
import { appConstants } from "../../../app.constants";

@Injectable()
export class searchResultsService {

	constructor(private http: Http, private _appConstants: appConstants) {

	}
	
}