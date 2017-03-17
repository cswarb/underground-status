import { Component, OnInit, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output, HostBinding } from '@angular/core';

@Component({
	moduleId: module.id,
    selector: 'emergency-delays',
    template: `
    	<div *ngIf="delays?.length < 1" class="center">
			<p>Currently no delays reported.</p>
    	</div>
		<div *ngFor="let delay of delays" class="delay">
			<div class="delay__wrapper">
				<p>{{delay?.description}}</p>
				<p *ngIf="delay.affectedRoutes.length > 0">{{delay?.affectedRoutes}}</p>
				<p *ngIf="delay.affectedStops.length > 0">{{delay?.affectedStops}}</p>
			</div>
		</div>	
    `
})
export class delayComponent implements OnInit {

	@Input() delays = [];

	constructor(){}	

	ngOnInit() {
		
	}

}