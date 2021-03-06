//Core imports
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule, JsonpModule } from "@angular/http";

import { searchResultsModule } from "./search-results/search-results.module";

//Custom Components
import { searchComponent } from "./search.component";

//services
import { searchService } from "./search.service";
import { searchFacade } from "./search-facade.service";

@NgModule({
    imports: [ //All the required additional modules for this module
    	BrowserModule,
    	FormsModule,
    	HttpModule,
    	JsonpModule,
    	ReactiveFormsModule,
        searchResultsModule
    ],
    declarations: [ //The components, directives, and pipes for this module
        searchComponent
    ],
    providers: [ //The service providers for this module
        searchService,
        searchFacade
    ],
    exports: [
        searchComponent
    ],
    bootstrap: [ //The components to be bootstraped by this module
    	
    ],
    entryComponents: [
        searchComponent
    ]
})
export class searchModule { }