import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class popupComponentResolver implements Resolve<any> {

	constructor() {

	}

	resolve(route: ActivatedRouteSnapshot) {
		//return data here if needed to access in the component
	}
	
}