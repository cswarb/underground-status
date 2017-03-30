//Core imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

//Custom Components
import { homeComponent } from './home.component';

//Modules
import { linesModule } from "../lines/lines.module";
import { filterModule } from "../filter/filter.module";
import { searchModule } from "../search/search.module";

import { lineAreaModule } from "../line-area/line-area.module";
import { stationAreaModule } from "../station-area/station-area.module";

//Global Services

//Routing
import { homeRoutingModule } from "./home-routing.module";

@NgModule({
    imports: [ //All the required additional modules for this module
    	BrowserModule,
    	FormsModule,
    	HttpModule,
    	JsonpModule,
    	ReactiveFormsModule,

        linesModule,
        filterModule,
        searchModule,

        lineAreaModule,
        stationAreaModule,
        
        homeRoutingModule
    ],
    declarations: [ //The components, directives, and pipes for this module
        homeComponent
    ],
    providers: [ //The service providers for this module

    ],
    exports: [
        homeComponent
    ],
    bootstrap: [ //The components to be bootstraped by this module
    	
    ],
    entryComponents: [
        homeComponent
    ]
})
export class homeModule { }