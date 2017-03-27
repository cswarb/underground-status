import { Component, Input, Output, OnInit, EventEmitter, ElementRef } from "@angular/core";
import { formControl } from "@angular/forms";

import { searchService } from "./search.service";

import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import * as _ from "lodash";

@Component({
	moduleId: module.id,
    selector: 'search',
    templateUrl: './search.component.html'
})
export class searchComponent implements OnInit {

	//Inputs from parent components
	@Input() filterType = "station";
	@Input() searchExample = "";
	@Input() searchString = "";
	@Input() autoCompleteVals = [];
	@Input() searchResults = [];

	//Outputs to parent components
	@Output() searchResultUpdated = new EventEmitter();

	autocompleteFilteredList = [];
	hasSearchResults = false;
	showAutocompleteUI = false;

	//Create a Subject we can subscribe to when the mode changes
	modelChanged: Subject = new Subject();

	//Local variables
	searchTerm: string;
	debounceValue: number = 300;

	constructor(private _searchService: searchService, private myElement: ElementRef) {
	}

	ngOnInit() {
		this._searchService.setAutoCompleteVals(this.autoCompleteVals);

		this.modelChanged
            .debounceTime(this.debounceValue) // wait 300ms after the last event before emitting last event
            .distinctUntilChanged() // only emit if value is different from previous value
            .subscribe((searchTerm) => {
            	if(!searchTerm) {return false};
            	if(searchTerm.length > 3 && this.isValidStation(searchTerm)) {
            		// if(this.filterType === "station") {
            			this._searchService.queryStation(searchTerm).then((res) => {
            				if(!res || res.httpStatusCode === 404) {return false};

		            		if(res.length < 1) {
		            			this.hasSearchResults = false;
		            		} else {
		            			this.hasSearchResults = true;
		            			this.hideAutocomplete();
		            		};
		            		this.handleStationDistruption(res);
		            	}, function(err){
		            		console.log(err);
		            	});
            		// } else {
		            // 	this._searchService.queryLineList(searchTerm).then((res) => {
		            // 		console.log(res);
		            // 	}, function(err){
		            // 		console.log(err);
		            // 	});
            		// };
            	};
            };		
	}

	isValidStation(searchTerm) {
		var found = false;
		if(this._searchService.isNaptanId(searchTerm)) {
			return true;
		};
		this.autoCompleteVals.forEach((element) => {
			if(this._searchService.getNaptanId(searchTerm)) {
				found = true
			};
			found = false;
		});
		return found;
	}

	searchResultChanged(delta) {
	    this.searchResultUpdated.next(delta);
	}

	handleStationDistruption(disruption) {
		//Only return the results that are from the tube
		this.searchResults = disruption.filter((value) => {
			return value.mode === "tube";
		});
		//Cause a change to update the search result component
		this.searchResultChanged(this.searchResults);
	}

	search = (term) => {
		//Force a model change, passing in the term
		this.modelChanged.next(term);
	}

	selectStation(station) {
		this.model = station.stationName;
		this.modelChanged.next(station.naptanId);
	}

	showAutocomplete() {
		this.showAutocompleteUI = true;
	}

	hideAutocomplete(event) {
		this.autocompleteFilteredList.length = 0;
		this.showAutocompleteUI = false;	
	}

	clearInput(searchTerm) {
		searchTerm.value = "";
		this.modelChanged.next();
		this.hideAutocomplete();
	}

	filterAutocomplete(search, event) {
		search.value.length > 1 ? this.showAutocomplete() : this.hideAutocomplete();

		if(event.isTrusted) {
			this.autocompleteFilteredList = this.autoCompleteVals.filter((value, iterator) => {
				if(value.stationName.match(new RegExp(search.value, "i"))) {
					return value;
				};
			}).sort((a, b) => {
				if(a.stationName < b.stationName) {
					return -1;
				};
			    if(a.stationName > b.stationName) {
			    	return 1;
			    };
			    return 0;
			});
		};
	}

}