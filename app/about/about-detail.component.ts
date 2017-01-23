import { Component, OnInit, Input } from "@angular/core";

import { testService } from "../shared/services/test.service";

@Component({
	moduleId: module.id,
    selector: 'about-detail',
    template: `
		{{data | json}}
		<input type="text" [(ngModel)]="data.name" />
    `
})
export class AboutDetailComponent implements OnInit {
	@Input() data: any;

	constructor() {

	}

	ngOnInit() {

	}
}