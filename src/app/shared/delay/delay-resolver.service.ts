import { Injectable } from "@angular/core";
import { Http, Response, URLSearchParams, Headers } from "@angular/http";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/Rx";

import { appConstants } from "../../app.constants";
import { delayFacade } from "./delay-facade.service";

@Injectable()
export class delayResolver implements Resolve<any> {

	constructor(private _delayFacade: delayFacade, private _appConstants: appConstants) {

	}

	resolve(route: ActivatedRouteSnapshot) {
		return this._delayFacade.getAllDelays(this._appConstants.app_travel_modes.tube);
	}
	
}