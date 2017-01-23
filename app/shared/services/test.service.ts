import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';


@Injectable()
export class testService {
	apiUrl: string = "/app/shared/services/";

	constructor(private http: Http) {

	}

	getPromiseData() {
		return this.http.get(this.apiUrl + "example.json")
                   .map(res => res.json())
                   .toPromise();
	}
	
}