//Core imports
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule, JsonpModule } from "@angular/http";

//Custom Components
import { searchResultsComponent } from "./search-results.component";

//Services
import { searchResultsService } from "./search-results.service";
import { searchResultsFacade } from "./search-results-facade.service";

@NgModule({
    imports: [ //All the required additional modules for this module
    	BrowserModule,
    	FormsModule,
    	HttpModule,
    	JsonpModule,
    	ReactiveFormsModule
    ],
    declarations: [ //The components, directives, and pipes for this module
        searchResultsComponent
    ],
    providers: [ //The service providers for this module
        searchResultsService,
        searchResultsFacade
    ],
    exports: [
        searchResultsComponent
    ],
    bootstrap: [ //The components to be bootstraped by this module
    	
    ],
    entryComponents: [
        searchResultsComponent
    ]
})
export class searchResultsModule { }