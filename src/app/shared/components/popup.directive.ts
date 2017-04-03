import { Directive, OnInit, OnChanges, ChangeDetectionStrategy, HostListener, ElementRef, ChangeDetectorRef, Input, Output, EventEmitter } from '@angular/core';

@Directive({
	selector: '[udgPopupDir]'
})
export class popupDirective {

    constructor(private el: ElementRef) {

    }

    @HostListener('click', ['$event']) onClick($event) {
        if($event.target.classList.contains("active")) {
	       this.hide($event);
        } else {
            this.show($event);
        };
	}

    show($event) {
        document.querySelector("body").classList.add("fixed");
    }

    hide($event) {
    	document.querySelector("body").classList.remove("fixed");
    }

}


