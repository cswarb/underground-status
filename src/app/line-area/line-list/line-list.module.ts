//Core imports
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule, JsonpModule } from "@angular/http";

//Custom Components
import { lineListComponent } from "./line-list.component";
import { toggleLineDetailDirective } from "./line-list.directive";

//Modules

//Global Services

//Routing

@NgModule({
    imports: [ //All the required additional modules for this module
    	BrowserModule,
    	FormsModule,
    	HttpModule,
    	JsonpModule,
    	ReactiveFormsModule
    ],
    declarations: [ //The components, directives, and pipes for this module
        lineListComponent,
        toggleLineDetailDirective
    ],
    providers: [ //The service providers for this module
    ],
    exports: [
        lineListComponent,
        toggleLineDetailDirective
    ],
    bootstrap: [ //The components to be bootstraped by this module
    	
    ],
    entryComponents: [
        lineListComponent
    ]
})
export class lineListModule { }