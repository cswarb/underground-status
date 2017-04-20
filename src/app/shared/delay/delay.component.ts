import { Component, OnInit, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output, HostBinding } from "@angular/core";
import { Resolve, ActivatedRoute } from "@angular/router";

@Component({
	moduleId: module.id,
    selector: "[emergency-delays]",
    templateUrl: "./delay.component.html"
})
export class delayComponent implements OnInit {

	delays: any = [];

	constructor(private route: ActivatedRoute){}	

	ngOnInit() {
		this.getResolveData();
	}

	private getResolveData(): void {
		this.concatArray(this.route.snapshot.data["resolveDataDelays"]);
	}

	private concatArray(delayArray: any): void {
		delayArray.map((value, iterator) => {
			this.delays = this.delays.concat(value);
		});
	}

}