import { Injectable } from "@angular/core";
import { Http, Response, URLSearchParams, Headers } from "@angular/http";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/Rx";

import { appConstants } from "../app.constants";
import { lineFacade } from "./line-facade.service";

@Injectable()
export class lineAreaResolver implements Resolve<any> {

	constructor(private _lineFacade: lineFacade, private _appConstants: appConstants) {

	}

	resolve(route: ActivatedRouteSnapshot){
		return Promise.all([
			this.getAllLinesStatuses(), 
			this.getOvergroundStatus(),
			this.getDlrStatus(),
			this.getRailStatus(),
			this.getTramStatus()
		]).catch((error) => {
			this.handleError(error);
		});
	}

	private getAllLinesStatuses(): any {
		return this._lineFacade.getAllLineStatuses(this._appConstants.app_travel_modes["tube"]);
	}

	private getDlrStatus(): any {
		return this._lineFacade.getAllLineStatuses(this._appConstants.app_travel_modes["dlr"]);
	}

	private getOvergroundStatus(): any {
		return this._lineFacade.getAllLineStatuses(this._appConstants.app_travel_modes["overground"]);
	}

	private getRailStatus(): any {
		return this._lineFacade.getAllLineStatuses(this._appConstants.app_travel_modes["tfl-rail"]);
	}

	private getTramStatus(): any {
		return this._lineFacade.getAllLineStatuses(this._appConstants.app_travel_modes["tram"]);
	}

	private handleError(error: any): Promise<any> {
		console.log("Error: ", error);
		return Promise.reject(error.message || error);
	}
	
}