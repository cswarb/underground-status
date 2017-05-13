//Core imports
import { NgModule, ModuleWithProviders } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule, JsonpModule } from "@angular/http";

//Custom Components
import { homeComponent } from "./home.component";

//Modules
import { lineListModule } from "../line-area/line-list/line-list.module";
import { filterModule } from "../filter/filter.module";
import { searchModule } from "../station-area/search/search.module";

import { lineAreaModule } from "../line-area/line-area.module";
import { stationAreaModule } from "../station-area/station-area.module";

//Global Services
import { lineService } from "../line-area/line.service";

//Routing
import { homeRoutingModule } from "./home-routing.module";

@NgModule({
    imports: [ //All the required additional modules for this module
    	BrowserModule,
    	FormsModule,
    	HttpModule,
    	JsonpModule,
    	ReactiveFormsModule,

        lineListModule,
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
        lineService
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
export class homeModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: homeModule,
            providers: [lineService]
        };
    };
}