import { Component, Input, Output, OnInit, EventEmitter, ElementRef } from "@angular/core";

import { searchService } from "./search.service";

import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import * as _ from "lodash";

@Component({
	moduleId: module.id,
    selector: '[search]',
    templateUrl: './search.component.html'
})
export class searchComponent implements OnInit {

	@Input() sharedSearchString: string;
    @Output() sharedSearchStringChange = new EventEmitter(); 
    //This @output needs to be referenced with the same variable as the input, 
    //but with Change on the end for it to work

	//Inputs from parent components
	@Input() filterType = "station";
	@Input() searchExample = "";
	@Input() autoCompleteVals = [];
	@Input() searchResults = [];

	//Outputs to parent components
	@Output() searchResultUpdated = new EventEmitter();

	autocompleteFilteredList = [];
	hasInvalidData = false;
	showAutocompleteUI = false;

	//Create a Subject we can subscribe to when the mode changes
	modelChanged: Subject<any> = new Subject();

	//Local variables
	searchTerm: string;
	debounceValue: number = 300;

	constructor(private _searchService: searchService, private myElement: ElementRef) {
	}

	ngOnInit() {
		this._searchService.setAutoCompleteVals(this.autoCompleteVals);

		this.modelChanged.debounceTime(this.debounceValue) // wait 300ms after the last event before emitting last event
            .distinctUntilChanged() // only emit if value is different from previous value
            .subscribe((searchTerm) => {

            	this.hasInvalidData = false;

            	if(!searchTerm) {return false};
            	if(searchTerm.length > 3 && this.isValidStation(searchTerm)) {
        			this._searchService.queryStation(searchTerm).then((res) => {
        				if(!res || res.httpStatusCode === 404) {return false};

	            		if(res.length < 1) {
	            			this.autocompleteFilteredList.length = 0;
	            			this.hasInvalidData = true;
	            		} else {
	            			this.hasInvalidData = false;
	            			this.hideAutocomplete();
	            			this.handleStationDistruption(res);
	            		};
	            	}, function(err){
	            		console.log(err);
	            	});
            	};
        });	
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

	handleStationDistruption(disruption) {
		//Only return the results that are from the tube
		this.searchResults = disruption.filter((value) => {
			return value.mode === "tube";
		});
		//Cause a change to update the search result component
		this.searchResultChanged(this.searchResults);
	}

	searchResultChanged(delta) {
		// pass the search results to the parent component to pass 
		// to the search results component
	    this.searchResultUpdated.next(delta);
	}

	search = (term) => {
		//Force a model change, passing in the term to search using the endpoint
		this.modelChanged.next(term);
		//update the 2 way binding between this, and the parent component
		this.sharedSearchStringChange.emit(term);
	}

	selectStation(station) {
		this.sharedSearchString = station.stationName;
		this.modelChanged.next(station.naptanId);
	}

	showAutocomplete() {
		this.showAutocompleteUI = true;
	}

	hideAutocomplete() {
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