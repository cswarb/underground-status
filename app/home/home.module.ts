//Core imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

//Custom Components
import { homeComponent } from './home.component';

import { searchComponent } from '../search/search.component';
import { filterComponent } from '../filter/filter.component';

//Modules
import { linesModule } from "../lines/lines.module";

//Global Services
import { testService } from "../shared/services/test.service";

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
        
        homeRoutingModule
    ],
    declarations: [ //The components, directives, and pipes for this module
        homeComponent,
        searchComponent,
        filterComponent
    ],
    providers: [ //The service providers for this module
        testService
    ],
    exports: [
        homeComponent,
        searchComponent,
        filterComponent
    ],
    bootstrap: [ //The components to be bootstraped by this module
    	
    ],
    entryComponents: [
        homeComponent
    ]
})
export class homeModule { }