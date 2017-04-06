//Core imports
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule, JsonpModule } from "@angular/http";

//Custom Components
import { stationAreaComponent } from "./station-area.component";

//Modules
import { filterModule } from "../filter/filter.module";
import { searchModule } from "./search/search.module";
import { delayModule } from "../shared/delay/delay.module";
import { searchResultsModule } from "./search/search-results/search-results.module";

//Global Services
import { stationService } from "./station.service";
import { stationFacade } from "./station-facade.service";
import { lineService } from "../line-area/line.service";
import { lineFacade } from "../line-area/line-facade.service";

//Routing
// import { homeRoutingModule } from "../home/home-routing.module";

@NgModule({
    imports: [ //All the required additional modules for this module
    	BrowserModule,
    	FormsModule,
    	HttpModule,
    	JsonpModule,
    	ReactiveFormsModule,

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
        stationFacade,
        lineService,
        lineFacade
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