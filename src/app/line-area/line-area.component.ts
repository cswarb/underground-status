import { Component, OnInit, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Resolve, ActivatedRoute } from "@angular/router";
import { lineFacade } from "./line-facade.service";
import { delayFacade } from "../shared/delay/delay-facade.service";

import { appConstants } from "../app.constants";

import { lineDataModel } from "./line-data.model";

@Component({
	moduleId: module.id,
    selector: "",
    templateUrl: "./line-area.template.html"
})
export class lineAreaComponent implements OnInit {

	listType: string = "Lines";
	searchString: string = "";
	allLineStatuses: lineDataModel[] = [];

	constructor(private _lineFacade: lineFacade, private _delayFacade: delayFacade, private route: ActivatedRoute, private _appConstants: appConstants) {}
	
	ngOnInit() {
		this.getResolveData();
	}

	private getResolveData(): void {
		console.log(this.route.snapshot.data["lines"]);
		this.allLineStatuses = this.route.snapshot.data["lines"];
	}

	handleError(error: any) {
		console.log("error: ", error);
	}

}