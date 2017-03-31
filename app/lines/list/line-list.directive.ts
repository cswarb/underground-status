import { Directive, OnInit, OnChanges, ChangeDetectionStrategy, HostListener, ElementRef, ChangeDetectorRef, Input, Output, EventEmitter } from '@angular/core';

@Directive({
	selector: '[toggleLineDetail]'
})
export class toggleLineDetailDirective {

    constructor(private el: ElementRef) {

    }

    @HostListener('click', ['$event']) onClick($event) {
	    this.toggle($event);
	}

    toggle($event) {
    	var hiddenDetailArea = $event.target.parentNode.offsetParent.children[1];
    	hiddenDetailArea.classList.toggle("undergroundline__block--expanded");
    }

}


