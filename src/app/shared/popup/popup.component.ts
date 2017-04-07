import { Component, OnInit, OnChanges, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef, ElementRef, Input, Output, HostBinding } from "@angular/core";
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
  		"[@popupAnimation]": "true",
  		"(document:keyup)": "keyup($event)"
  	},
  	templateUrl: "./popup.component.html"
})
export class popupComponent implements OnInit, OnDestroy {

	//Could eventually make this more reusable
		//http://blog.brecht.io/Modals-in-angular2/
		//https://plnkr.co/edit/0c2YuGt7n7Fti0uup6Gs?p=info

	constructor(private el: ElementRef, private router: Router){}	

	ngOnInit() {
		this.show();
	}

	ngOnDestroy() {
		this.hide();
	}

	private keyup(event: KeyboardEvent): void {
        if (event.keyCode === 27) {
            this.close();
        }
    }

	public close(): void {
		this.router.navigate([{ outlets: { popup: null }}]);
	}

	public show(): void {
        document.querySelector("body").classList.add("fixed");
    }

    public hide(): void {
    	document.querySelector("body").classList.remove("fixed");
    }

}