import { Component, OnInit, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output, HostBinding, EventEmitter } from "@angular/core";

@Component({
	moduleId: module.id,
    selector: "[search-results]",
    templateUrl: "./search-results.component.html"
})
export class searchResultsComponent implements OnInit {

	@Input() searchResults = [];
	@Output() clearSearchResults = new EventEmitter();

	constructor(){}	

	ngOnInit() {
	}

	public clearResult(delta): void {
	    this.clearSearchResults.next(delta);
	}

}