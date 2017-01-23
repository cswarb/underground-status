//Core imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

//Custom Components
import { AdminComponent } from './admin.component';

//Modules

//Global Services

//Routing
import { adminRoutingModule } from './admin-routing.module';

@NgModule({
    imports: [ //All the required additional modules for this module
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        ReactiveFormsModule,

        adminRoutingModule
    ],
    declarations: [ //The components, directives, and pipes for this module
        AdminComponent
    ],
    providers: [ //The service providers for this module
        
    ],
    exports: [
        AdminComponent
    ],
    bootstrap: [ //The components to be bootstraped by this module

    ],
    entryComponents: [
        AdminComponent
    ]
})
export class adminModule { }