import { Injectable } from "@angular/core";
import { Http, Response, URLSearchParams, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/Rx";
import { appConstants } from "../../app.constants";
import { delayService } from "./delay.service";


@Injectable()
export class delayFacade {

	constructor(private _delayService: delayService) {

	}

	/**
	 * Get any delays to send to the display component
	 * @param  {string}
	 * @return {promise}
	 */
	getAllDelays(mode: string) {
		return this._delayService.getAllDelays(mode);
	}
	
}