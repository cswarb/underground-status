import { Injectable } from "@angular/core";
import { Http, Response, URLSearchParams, Headers } from "@angular/http";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/Rx";

import { appConstants } from "../app.constants";
import { stationFacade } from "./station-facade.service";
import { lineFacade } from "../line-area/line-facade.service";

@Injectable()
export class stationAreaResolver implements Resolve<any> {

	constructor(private _stationFacade: stationFacade, private _lineFacade: lineFacade, private _appConstants: appConstants) {

	}

	resolve(route: ActivatedRouteSnapshot) {
		return this._lineFacade.getAllPossibleLines();
	}


	
}