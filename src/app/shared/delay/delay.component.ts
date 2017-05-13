import { Component, OnInit, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output, HostBinding } from "@angular/core";
import { Resolve, ActivatedRoute } from "@angular/router";

import { delayModel } from "./delay.model";

@Component({
	moduleId: module.id,
    selector: "[emergency-delays]",
    templateUrl: "./delay.component.html"
})
export class delayComponent implements OnInit {

	delays: delayModel[] = [];

	constructor(private route: ActivatedRoute){}	

	ngOnInit() {
		this.getResolveData();
	}

	private getResolveData(): void {
		this.concatArray(this.route.snapshot.data["delays"]);
	}

	private concatArray(delayArray: any): void {
		delayArray.forEach((value, iterator) => {
			if(value.length < 1) { return false; };
			//Create the delayModel map
			const obj = new delayModel(
				value[iterator].$type,
				value[iterator].category,
				value[iterator].type,
				value[iterator].categxoryDescription,
				value[iterator].description,
				value[iterator].affectedRoutes,
				value[iterator].affectedStops,
				value[iterator].closureText
			);

			this.delays = this.delays.concat(obj);
		});
	}
	
}