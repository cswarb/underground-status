import { Component, OnInit, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output, HostBinding } from "@angular/core";
import { FormControl } from "@angular/forms";
import { RouterModule, Router } from "@angular/router";

import { slideInDownAnimation }   from "../../animations";

@Component({
	moduleId: module.id,
    selector: "",
    animations: [
    	slideInDownAnimation
    ],
  	host: {
  		"[@popupAnimation]": "true"
  	},
  	templateUrl: "./popup.component.html"
})
export class popupComponent implements OnInit {

	constructor(private router: Router){}	

	ngOnInit() {
		
	}

	close() {
		this.router.navigate([{ outlets: { popup: null }}]);
	}

}