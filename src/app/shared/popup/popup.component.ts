import { Component, OnInit, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output, HostBinding } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

import { slideInDownAnimation }   from '../../animations';

@Component({
	moduleId: module.id,
    selector: '',
    template: `
    	<div class="popup__background" (click)="close()"></div>
		<div class="popup">
			<button type="button" class="popup__close" (click)="close()"></button>
			<figure>
				<img src="/assets/img/map.png" alt=""/>
				<figcaption></figcaption>
			</figure>
		</div>	
    `
})
export class popupComponent implements OnInit {

	constructor(private router: Router){}	

	ngOnInit() {
		
	}

	close() {
		this.router.navigate([{ outlets: { popup: null }}]);
	}

}