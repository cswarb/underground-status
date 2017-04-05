//Core imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

//Custom Components
import { stationAreaComponent } from './station-area.component';

//Modules
// import { linesModule } from "../lines/lines.module";
import { filterModule } from "../filter/filter.module";
import { searchModule } from "./search/search.module";
import { delayModule } from "../shared/delay/delay.module";
import { searchResultsModule } from "./search/search-results/search-results.module";

//Global Services
import { stationService } from "./station.service";
import { lineService } from "../line-area/line.service";

//Routing
// import { homeRoutingModule } from "../home/home-routing.module";

@NgModule({
    imports: [ //All the required additional modules for this module
    	BrowserModule,
    	FormsModule,
    	HttpModule,
    	JsonpModule,
    	ReactiveFormsModule,

        // linesModule,
        filterModule,
        searchModule,
        delayModule,
        searchResultsModule
    ],
    declarations: [ //The components, directives, and pipes for this module
        stationAreaComponent
    ],
    providers: [ //The service providers for this module
        stationService,
        lineService
    ],
    exports: [
        stationAreaComponent
    ],
    bootstrap: [ //The components to be bootstraped by this module
    	
    ],
    entryComponents: [
        stationAreaComponent
    ]
})
export class stationAreaModule { }