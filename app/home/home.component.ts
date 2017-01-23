import { Component, OnInit, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
	moduleId: module.id,
    selector: '',
    template: `
		<article class="">

            <section class="dataselection">
                <button type="button" class="dataselection__filter button button__tab button__filter button__filter--selected">Lines</button>
                <button type="button" class="dataselection__filter button button__tab button__filter">Stations</button>
            </section>
            
            <section class="undergroundline">
                <header class="undergroundline__header">
                    <form action="">
                        <div class="searcharea">
                            <input type="text" class="searcharea__input" placeholder="e.g. District" min="2" max="30" autofocus="autofocus"/>
                        </div>
                    </form>
                </header>

                <popular-lines style="display: block;width:100%;"></popular-lines>

                <!-- <footer>
                    
                </footer> -->
            </section>
        </article>
		<router-outlet></router-outlet>
    `
})
export class homeComponent implements OnInit {


	
	ngOnInit() {
		
	}

}