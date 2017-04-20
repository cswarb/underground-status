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
		return Promise.all([
			this._delayFacade.getAllDelays(this._appConstants.app_travel_modes.tube),
			this._delayFacade.getAllDelays(this._appConstants.app_travel_modes.dlr),
			this._delayFacade.getAllDelays(this._appConstants.app_travel_modes.overground),
			this._delayFacade.getAllDelays(this._appConstants.app_travel_modes.tflRail),
			this._delayFacade.getAllDelays(this._appConstants.app_travel_modes.tram)
		]).catch((error) => {
			this.handleError(error);
		});
	}

	private handleError(error: any): Promise<any> {
		console.log("Error: ", error);
		return Promise.reject(error.message || error);
	}
	
}