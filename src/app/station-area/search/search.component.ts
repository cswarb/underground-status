import { Component, Input, Output, OnInit, EventEmitter, ElementRef } from "@angular/core";
import { ReactiveFormsModule, FormBuilder, FormsModule, FormGroup, FormControl, Validators } from "@angular/forms";

import { searchFacade } from "./search-facade.service";

import { Subscription } from "rxjs/Subscription";
import { Subject } from "rxjs/Subject";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/switchMap";

import { stationListModel } from "../station-list.model";
import { stationInfoModel } from "../station-info.model";

import * as _ from "lodash";

@Component({
	moduleId: module.id,
    selector: "[search]",
    templateUrl: "./search.component.html"
})
export class searchComponent implements OnInit {

	autocompleteForm: FormGroup;

	@Input() sharedSearchString: any;

	//Inputs from parent components
	@Input() filterType: string = "station";
	@Input() searchExample: string = "";
	@Input() autoCompleteVals: stationListModel[] = [];
	@Input() searchResults: stationInfoModel[] = [];

	//Outputs to parent components
	@Output() searchResultUpdated: EventEmitter<any> = new EventEmitter();

	autocompleteFilteredList: any = [];
	hasInvalidData: boolean = false;
	showAutocompleteUI: boolean = false;

	//Create a Subject we can subscribe to when the mode changes - changes are triggered manually with next()
	modelChanged: Subject<any> = new Subject();

	//Local variables
	debounceValue: number = 300;

	constructor(private fb: FormBuilder,
		private _searchFacade: searchFacade,
		private myElement: ElementRef) { }

	ngOnInit() {
		this._searchFacade.setAutoCompleteVals(this.autoCompleteVals);

		this.modelChanged.debounceTime(this.debounceValue) // wait 300ms after the last event before emitting last event
            .subscribe((searchTerm) => {
            	this.hasInvalidData = false;
            	if(!searchTerm) {return false};
            	if(searchTerm.length > 3 && this.isValidStation(searchTerm)) {
        			this.doSearch(searchTerm);
            	};
        });	
	}

	private doSearch(searchTerm: string) {	
		this._searchFacade.queryStation(searchTerm).then((res) => {
			if(!res) {return false};

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
	}

	private isValidStation(searchTerm) {	
		var found = false;
		if(this._searchFacade.isNaptanId(searchTerm)) {
			return true;
		};
		this.autoCompleteVals.forEach((element) => {
			if(this._searchFacade.getNaptanId(searchTerm)) {
				found = true
			};
			found = false;
		});
		return found;
	}

	private handleStationDistruption(disruption) {	
		//Only return the results that are from the tube
		this.searchResults = disruption.filter((value) => {
			return value.mode === "tube";
		});
		//Cause a change to update the search result component
		this.searchResultChanged(this.searchResults);
	}

	private searchResultChanged(delta) {	
		// pass the search results to the parent component to pass 
		// to the search results component
	    this.searchResultUpdated.next(delta);
	}

	public search = (term) => {
		//Force a model change, passing in the term to search using the endpoint
		this.modelChanged.next(term);
	}

	public selectStation(searchTerm, station) {	
		searchTerm = station.stationName;
		this.modelChanged.next(station.naptanId);
	}

	private showAutocomplete() {			
		this.showAutocompleteUI = true;
	}

	private hideAutocomplete() {	
		this.autocompleteFilteredList.length = 0;
		this.showAutocompleteUI = false;	
	}

	public clearInput(searchTerm): void {
		this.sharedSearchString.search = "";
		this.modelChanged.next("");
		this.hideAutocomplete();
	}

	public filterAutocomplete(search, event): void {
		search.length > 1 ? this.showAutocomplete() : this.hideAutocomplete();

		if(event.isTrusted) {
			this.autocompleteFilteredList = this.autoCompleteVals.filter((value, iterator) => {
				if(value.stationName.match(new RegExp(search, "i"))) {
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