import { Component, OnInit, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output, HostBinding } from '@angular/core';

@Component({
	moduleId: module.id,
    selector: 'search-results',
    template: `
    	<div *ngIf="!searchResults" class="center">
			<h4 class="ui-helper">Search for a station.</h4>
    	</div>
		<div *ngFor="let result of searchResults" class="result">
			<div class="result__wrapper">
			</div>
		</div>	
    `
})
export class searchResultsComponent implements OnInit {

	@Input() searchResults = null;

	constructor(){}	

	ngOnInit() {

	}

}