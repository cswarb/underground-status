import { Component, Input, OnInit, EventEmitter, ElementRef } from "@angular/core";
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
	@Input() filterType;
	@Input() searchExample;
	@Input() searchString;
	@Input() autoCompleteVals;
	autocompleteFilteredList = [];
	results = [];

	showAutocomplete = false;

	//Create a Subject
	modelChanged: Subject = new Subject();

	//Local variables
	searchTerm: string;
	debounceValue: number = 300;

	constructor(private _searchService: searchService, private myElement: ElementRef) {

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
		            		if(res.httpStatusCode === 404 || !res) {return false};
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

	selectStation(station) {
		this.model = station.naptanId;
		this.modelChanged.next(this.model);
	}

	revealAutocomplete() {
		this.showAutocomplete = true;
	}

	hideAutocomplete(event) {
		console.log(this.myElement.nativeElement);
		console.log(event.target);
		if(false) {
			this.showAutocomplete = false;
			this.autocompleteFilteredList = _.cloneDeep(this.autoCompleteVals);
		};		
	}

	filterAutocomplete(search, event) {
		if(event.isTrusted) {
			// console.log(search.value, " :search");
			// console.log(this, " :search");
			//now filter the list and remove the values from the array
			// console.log(this.autocompleteFilteredList);
			// console.log(this.autoCompleteVals);
			this.autoCompleteVals = this.autoCompleteVals.filter((value, iterator) => {
				if(value.stationName.match(new RegExp(search.value, "i"))) {
					return value;
				};
			});
		};
	}

}