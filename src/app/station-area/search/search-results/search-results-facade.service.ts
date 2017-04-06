import { Injectable } from "@angular/core";
import { Http, Response, URLSearchParams } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/Rx";
import { appConstants } from "../../../app.constants";
import { searchResultsService } from "./search-results.service";


@Injectable()
export class searchResultsFacade {

	constructor(private _searchResultsService: searchResultsService) {

	}
	
}