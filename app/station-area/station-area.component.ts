import { Component, OnInit, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { testService } from "../shared/services/test.service";

@Component({
	moduleId: module.id,
    selector: '',
    template: `
		<article class="">

            <filters style="display:block;width:100%"></filters>
            
            <section class="undergroundline">
	            <search [filterType]="filterType" [searchExample]="searchExample" style="display:block;width:100%"></search>

	            {{lineData | json}}

	            <line-list style="display:block;width:100%"></line-list>
            </section>
                  
        </article>
    `
})
export class stationAreaComponent implements OnInit {

	lineData: any;
	filterType: string = "station";
	searchExample: string = "Bank";

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