import { Component, Directive, OnInit, OnChanges, AfterViewChecked, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef, ElementRef, Input, Output, HostBinding } from "@angular/core";
import { FormControl } from "@angular/forms";

@Directive({
    selector: "[udg-zoom]",
  	host: {
  		"(document:keyup)": "keyup($event)"
  	}
})
export class popupComponentDirective implements OnInit, OnDestroy, AfterViewChecked {

  image: any;
  zoomIn: any;
  zoomOut: any;
  scale: number = 1;

	constructor(private el: ElementRef){}	

	ngOnInit() {
    this.image = {
      "dom": document.getElementById("udg-map"),
      "width": null,
      "height": null
    }; 
    this.zoomIn = this.el.nativeElement.children[0];
    this.zoomOut = this.el.nativeElement.children[1];

    this.image.dom.addEventListener("load", (evt) => {
      this.imageHasLoaded(evt);
    });

    this.image.dom.addEventListener("click", (evt) => {
      this.translateMap(evt);
    });

    this.zoomIn.addEventListener("click", (evt) => {
      this.zoomInMap(evt);
    });

    this.zoomOut.addEventListener("click", (evt) => {
      this.zoomOutMap(evt);
    });
	}

	ngAfterViewChecked() {
	}

  ngOnDestroy() {
  }

  imageHasLoaded(event) {
    this.image.width = event.target.width;
    this.image.height = event.target.height;
  }

  translateMap(event) {
    console.log(this);
    console.log("translate(" + event.clientX + "px, " + event.clientY + "px) scale(" + this.scale + ")");
    this.image.dom.style.transform = "translate(" + event.clientX + "px, " + event.clientY + "px) scale(" + this.scale + ")";
  }

  zoomInMap(event) {
    if(this.scale === 4) {
      return false;
    };
    this.image.dom.style.transform = "scale(" + ++this.scale + ")";
  }

  zoomOutMap(event) {
    if(this.scale === 1) {
      return false;
    };
    this.image.dom.style.transform = "scale(" + --this.scale + ")";
  }

	// private keyup(event: KeyboardEvent): void {
 //    if (event.keyCode === 27) {
 //        this.close();
 //    }
  // }

	// public show(): void {
 //      document.querySelector("body").classList.add("fixed");
 //  }

 //  public hide(): void {
 //  	document.querySelector("body").classList.remove("fixed");
 //  }

}