import { Directive, OnInit, OnChanges, ChangeDetectionStrategy, HostListener, ElementRef, ChangeDetectorRef, Input, Output, EventEmitter } from '@angular/core';
import { Router, Routes, RouterModule, NavigationEnd } from "@angular/router";

@Directive({
	selector: '[udgPopupDir]'
})
export class popupDirective {

    acceptedUrls = ["/status/lines(popup:map)", "/status/stations(popup:map)"]

    constructor(private el: ElementRef, private router: Router) {
        router.events.subscribe((val) => {
             if (val instanceof NavigationEnd) {
                if(this.canLoadModal(val["url"])) {
                    this.show();
                } else {
                    this.hide();
                };
            };
        });
    }

    canLoadModal(url) {
        return this.acceptedUrls.some((val) => {
            return val == url;
        });
    }

    show() {
        document.querySelector("body").classList.add("fixed");
    }

    hide() {
    	document.querySelector("body").classList.remove("fixed");
    }

}