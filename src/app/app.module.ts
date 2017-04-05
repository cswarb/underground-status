//Core imports
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule }   from "@angular/forms";
import { HttpModule, JsonpModule } from "@angular/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

//Custom Components
import { AppComponent } from "./app.component";
import { wildCardComponent } from "./wildcard/wildcard.component";
import { popupComponent } from "./shared/popup/popup.component";
import { popupDirective } from "./shared/popup/popup.directive";


//Modules
import { homeModule } from "./home/home.module";
import { navigationModule } from "./shared/navigation/navigation.module";

//Global Services
import { delayService } from "./shared/delay/delay.service";

//Routing
import { AppRoutingModule } from "./app.routes";

//Constants
import { appConstants } from "./app.constants";

@NgModule({
    imports: [ //All the required additional modules for this root module
    	BrowserModule,
    	FormsModule,
    	HttpModule,
    	JsonpModule,
    	ReactiveFormsModule,
        BrowserAnimationsModule,

        homeModule,
        navigationModule,

    	AppRoutingModule
    ],
    declarations: [ //The components, directives, and pipes for this module
        AppComponent,
        wildCardComponent,
        popupComponent,
        popupDirective
    ],
    providers: [ //The service providers for this module
        appConstants,
        delayService
    ],
    bootstrap: [ //The components to be bootstraped by this module
    	AppComponent
    ]
})
export class AppModule { }