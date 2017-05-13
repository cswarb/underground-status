import { Component, OnInit, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output, HostBinding, EventEmitter } from "@angular/core";

import { stationInfoModel } from "../../station-info.model";

@Component({
	moduleId: module.id,
    selector: "[search-results]",
    templateUrl: "./search-results.component.html"
})
export class searchResultsComponent implements OnInit {

	@Input() searchResults: stationInfoModel[] = [];
	@Output() clearSearchResults = new EventEmitter();

	constructor(){}	

	ngOnInit() {
	}

	public clearResult(delta): void {
	    this.clearSearchResults.next(delta);
	}

}