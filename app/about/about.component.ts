import { Component, OnInit } from "@angular/core";

import { testService } from "../shared/services/test.service";

@Component({
	moduleId: module.id,
    selector: '',
    templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
	aboutData: any = {};

	constructor(private _testService: testService) {

	}

	ngOnInit() {
		//Get the relevant data from the service
		this.getData();
	}

	getData() {
		this._testService.getPromiseData().then((response) => {
			this.aboutData = response.data;
		}, (err) => {
			console.log("error: ", err);
		});
	}

}