//Core imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

//Custom Components
import { AboutComponent } from './about.component';
import { AboutDetailComponent } from './about-detail.component';

//Modules

//Global Services
import { testService } from "../shared/services/test.service";

//Routing
import { aboutRoutingModule } from './about-routing.module';

@NgModule({
    imports: [ //All the required additional modules for this module
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        ReactiveFormsModule,

        aboutRoutingModule
    ],
    declarations: [ //The components, directives, and pipes for this module
        AboutComponent,
        AboutDetailComponent
    ],
    providers: [ //The service providers for this module
        testService
    ],
    exports: [
        AboutComponent,
        AboutDetailComponent
    ],
    bootstrap: [ //The components to be bootstraped by this module

    ],
    entryComponents: [
        AboutComponent
    ]
})
export class aboutModule { }