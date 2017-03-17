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

	//Create a Subject
	modelChanged: Subject = new Subject();

	//Local variables
	searchTerm: string;
	debounceValue: number = 300;

	constructor(private _searchService: searchService) {

	}

	ngOnInit() {
		this.modelChanged
            .debounceTime(this.debounceValue) // wait 300ms after the last event before emitting last event
            .distinctUntilChanged() // only emit if value is different from previous value
            .subscribe((searchTerm) => {
            	this._searchService.queryLineList(searchTerm).then(function(res) {
            		console.log(res);
            	}, function(err){
            		console.log(err);
            	});
            };		
	}

	search = (term) => {
		//Force a model change, passing in the term
		this.modelChanged.next(term);
	}
}