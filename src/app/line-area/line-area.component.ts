import { Component, OnInit, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output } from "@angular/core";
import { FormControl } from "@angular/forms";
import { lineFacade } from "./line-facade.service";
import { delayFacade } from "../shared/delay/delay-facade.service";

@Component({
	moduleId: module.id,
    selector: "",
    template: `
		<article class="">

            <div filters></div>

            <div emergency-delays [delays]="delays"></div>
            
            <section class="undergroundline">
            	<div class="undergroundline__lines">
    				<h2 class="undergroundline__title">All {{listType}}:</h2>
	            	<div line-list *ngFor="let line of allLineStatuses" [lineData]="line"></div>
           		</div>
            </section>

        </article>
    `
})
export class lineAreaComponent implements OnInit {

	lineData: any;
	filterType: string = "line";
	searchExample: string = "Circle";
	listType: string = "Lines";
	searchString: string = "";
	delays: any = [];
	allLineStatuses: any = [];

	constructor(private _lineFacade: lineFacade, private _delayFacade: delayFacade) {}
	
	ngOnInit() {
		this.getAllLinesStatuses();
		this.getAllDelays();
	}

	getAllDelays() {
		this._delayFacade.getAllDelays("tube").then((response) => {
			this.delays = response;
		}, (err) => {
			console.log(err);
		});
	}

	getAllLinesStatuses() {
		this._lineFacade.getAllLineStatuses("tube").then((response) => {
			this.allLineStatuses = response;
		}, (err) => {
			console.log("error: ", err);
		});
	}

}