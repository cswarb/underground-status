import { Component, OnInit, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output, HostBinding } from "@angular/core";
import { Resolve, ActivatedRoute } from "@angular/router";

import { delayModel } from "./delayModel";

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
		this.concatArray(this.route.snapshot.data["resolveDataDelays"]);
	}

	private concatArray(delayArray: any): void {
		delayArray.map((value, iterator) => {
			if(value.length < 1) {return false};
			console.log(value[0]["category"]);
			this.delays = this.delays.concat(
				new delayModel(
					[value][0]["$type"],
					[value][0]["category"],
					[value][0]["type"],
					[value][0]["categoryDescription"],
					[value][0]["description"],
					[value][0]["affectedRoutes"],
					[value][0]["affectedStops"],
					[value][0]["closureText"]
				)
			);
		});
	}

	check() {
		console.log(this);
	}
}