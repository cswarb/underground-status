import { Injectable } from "@angular/core";
import { Http, Response, URLSearchParams, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/Rx";
import { appConstants } from "../app.constants";
import { lineService } from "./line.service";


@Injectable()
export class lineFacade {

	constructor(private _lineService: lineService) {

	}

	/**
	 * Used when the user clicks for more details of a specific line on the lineList components
	 * @param  {string}
	 * @return {promise}
	 */
	getDetailedLineInfo(lineId: string): any {
		return this._lineService.getDetailedLineInfo(lineId);
	}

	/**
	 * Get all the possible lines
	 * Used on the stationArea component to then find all stations from the line
	 * @return {promise}
	 */
	getAllPossibleLines(): any {
		return this._lineService.getAllPossibleLines();
	}

	/**
	 * Used by the lineArea component to get all tube line statuses
	 * @param  {string}
	 * @return {promise}
	 */
	getAllLineStatuses(type: string): any {
		return this._lineService.getAllLineStatuses(type);
	}
	
}