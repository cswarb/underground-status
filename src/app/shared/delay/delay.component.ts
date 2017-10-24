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
			if(value && value.length < 1) { return false; };
			if(value) {
				//Create the delayModel map
				const obj = new delayModel(
					value[0].$type,
					value[0].category,
					value[0].type,
					value[0].categxoryDescription,
					value[0].description,
					value[0].affectedRoutes,
					value[0].affectedStops,
					value[0].closureText
				);
				this.delays.push(obj);
			};
		});
	}
	
}