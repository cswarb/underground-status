import { Component, Input, OnInit } from "@angular/core";

@Component({
	moduleId: module.id,
    selector: 'search',
    templateUrl: './search.component.html'
})
export class searchComponent implements OnInit {

	@Input() filterType;
	@Input() searchExample;

	constructor() {

	}

	ngOnInit() {
		
	}

}