import { Component, OnInit, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { testService } from "../shared/services/test.service";

@Component({
	moduleId: module.id,
    selector: '',
    template: `
    	<router-outlet></router-outlet>
    `
})
export class homeComponent implements OnInit {

	lineData: any;

	constructor(private _testService: testService) {}
	
	ngOnInit() {
		this.getData();
	}

	getData() {
		this._testService.getPromiseData().then((response) => {
			console.log(response);
			this.lineData = response.data;
		}, (err) => {
			console.log("error: ", err);
		});
	}

}