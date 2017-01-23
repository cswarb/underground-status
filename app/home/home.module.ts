//Core imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

//Custom Components
import { homeComponent } from './home.component';
import { homeDetailComponent } from './home-detail.component';
import { homeListComponent } from './home-list.component';

//Modules

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
        
        homeRoutingModule
    ],
    declarations: [ //The components, directives, and pipes for this module
        homeComponent,
        homeDetailComponent,
        homeListComponent
    ],
    providers: [ //The service providers for this module
    ],
    exports: [
        homeComponent,
        homeDetailComponent,
        homeListComponent
    ],
    bootstrap: [ //The components to be bootstraped by this module
    	
    ],
    entryComponents: [
        homeComponent
    ]
})
export class homeModule { }