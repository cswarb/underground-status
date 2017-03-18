import { Component, Input, OnInit, EventEmitter } from "@angular/core";
import { formControl } from "@angular/forms";

import { searchService } from "./search.service";

import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
	moduleId: module.id,
    selector: 'search',
    templateUrl: './search.component.html'
})
export class searchComponent implements OnInit {

	//Inputs from parent components
	@Input() filterType;
	@Input() searchExample;
	@Input() searchString;
	@Input() autoCompleteVals;
	results = [];

	//Create a Subject
	modelChanged: Subject = new Subject();

	//Local variables
	searchTerm: string;
	debounceValue: number = 300;

	constructor(private _searchService: searchService) {

	}

	handleStationDistruption(disruption) {
		this.results = disruption.filter((value) => {
			return value.mode === "tube";
		});
	}

	ngOnInit() {
		this._searchService.setAutoCompleteVals(this.autoCompleteVals);

		this.modelChanged
            .debounceTime(this.debounceValue) // wait 300ms after the last event before emitting last event
            .distinctUntilChanged() // only emit if value is different from previous value
            .subscribe((searchTerm) => {
            	if(searchTerm.length > 3) {
            		if(this.filterType === "station") {
            			this._searchService.queryStation(searchTerm).then((res) => {
		            		console.log(res);
		            		this.handleStationDistruption(res);
		            	}, function(err){
		            		console.log(err);
		            	});
            		} else {
		            	this._searchService.queryLineList(searchTerm).then((res) => {
		            		console.log(res);
		            	}, function(err){
		            		console.log(err);
		            	});
            		};
            	};
            };		
	}

	search = (term) => {
		//Force a model change, passing in the term
		this.modelChanged.next(term);
	}
}