//Core imports
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule, JsonpModule } from "@angular/http";

import { homeRoutingModule } from "../home/home-routing.module";

//Custom Components
import { filterComponent } from "./filter.component";

@NgModule({
    imports: [ //All the required additional modules for this module
    	BrowserModule,
    	FormsModule,
    	HttpModule,
    	JsonpModule,
    	ReactiveFormsModule,
        homeRoutingModule
    ],
    declarations: [ //The components, directives, and pipes for this module
        filterComponent
    ],
    providers: [ //The service providers for this module
    ],
    exports: [
        filterComponent
    ],
    bootstrap: [ //The components to be bootstraped by this module
    	
    ],
    entryComponents: [
        filterComponent
    ]
})
export class filterModule { }