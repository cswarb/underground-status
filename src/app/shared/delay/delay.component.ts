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
		this.delays = this.route.snapshot.data["resolveDataDelays"];
	}

}