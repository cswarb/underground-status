import { Component, OnInit, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output, HostBinding, EventEmitter } from '@angular/core';

@Component({
	moduleId: module.id,
    selector: 'search-results',
    template: `
    	<div *ngIf="searchResults.length < 1" class="center">
			<h4 class="ui-helper">Search for a station.</h4>
    	</div>
		<div *ngIf="searchResults.length > 0">
			<div (click)="clearResults()">X</div>
			<div class="result__block" *ngFor="let result of searchResults" class="result__wrapper">
				<p class="result__item result__title">{{result?.commonName}}</p>
				<p class="result__item result__description">{{result?.description}}</p>
				<p class="result__item result__helper" [innerHTML]="result?.additionalInformation"></p>
			</div>
		</div>	
    `
})
export class searchResultsComponent implements OnInit {

	@Input() searchResults = [];
	@Output() clearSearchResults = new EventEmitter();

	constructor(){}	

	ngOnInit() {
	}

	clearResults(delta) {
	    this.clearSearchResults.next(delta);
	}

}