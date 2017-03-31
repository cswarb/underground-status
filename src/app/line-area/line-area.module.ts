//Core imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

//Custom Components
import { lineAreaComponent } from './line-area.component';

//Modules
import { linesModule } from "../lines/lines.module";
import { filterModule } from "../filter/filter.module";
import { searchModule } from "../search/search.module";
import { delayModule } from "../shared/delay/delay.module";

//Global Services
import { lineService } from "./line.service";

//Routing
// import { homeRoutingModule } from "../home/home-routing.module";

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
        delayModule
    ],
    declarations: [ //The components, directives, and pipes for this module
        lineAreaComponent
    ],
    providers: [ //The service providers for this module
        lineService
    ],
    exports: [
        lineAreaComponent
    ],
    bootstrap: [ //The components to be bootstraped by this module
    	
    ],
    entryComponents: [
        lineAreaComponent
    ]
})
export class lineAreaModule { }