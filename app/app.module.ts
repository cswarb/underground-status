//Core imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

//Custom Components
import { AppComponent } from './app.component';
import { wildCardComponent } from './wildcard/wildcard.component';
import { popupComponent } from './shared/components/popup.component';

import { navigationComponent } from './navigation/navigation.component';

//Modules
import { homeModule } from "./home/home.module";
import { adminModule } from "./admin/admin.module";

//Global Services
import { testService } from "./shared/services/test.service";
import { AuthGuard } from "./shared/services/authguard.service";
import { AuthService } from "./shared/services/auth.service";

//Routing
import { AppRoutingModule } from './app.routes';

@NgModule({
    imports: [ //All the required additional modules for this root module
    	BrowserModule,
    	FormsModule,
    	HttpModule,
    	JsonpModule,
    	ReactiveFormsModule,

        homeModule,
        adminModule,

    	AppRoutingModule
    ],
    declarations: [ //The components, directives, and pipes for this module
        AppComponent,
        wildCardComponent,
        popupComponent,
        navigationComponent
    ],
    providers: [ //The service providers for this module
    	testService,
        AuthGuard,
        AuthService
    ],
    bootstrap: [ //The components to be bootstraped by this module
    	AppComponent
    ]
})
export class AppModule { }