import { Component, OnInit, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output, HostBinding } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

import { slideInDownAnimation }   from '../../animations';

@Component({
	moduleId: module.id,
    selector: '',
    template: `
		<div class="popup">
			<button type="button" class="popup__close" (click)="close()"></button>
			<figure>
				<img src="/img/map.png" alt=""/>
				<figcaption></figcaption>
			</figure>
		</div>	
    `,
    animations: [
    	slideInDownAnimation
    ]
})
export class popupComponent implements OnInit {

	@HostBinding('@routeAnimation') routeAnimation = true;

	constructor(private router: Router){}	

	ngOnInit() {
		
	}

	close() {
		this.router.navigate([{ outlets: { popup: null }}]);
	}

}