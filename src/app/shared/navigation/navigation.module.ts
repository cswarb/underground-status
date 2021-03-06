//Core imports
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule, JsonpModule } from "@angular/http";

//Custom Components
import { navigationComponent } from "./navigation.component";
import { popupComponent } from "../popup/popup.component";

//Routing

//Global Services

//Routing
import { AppRoutingModule } from "../../app.routes";

@NgModule({
    imports: [ //All the required additional modules for this module
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        ReactiveFormsModule,
        AppRoutingModule
    ],
    declarations: [ //The components, directives, and pipes for this module
        navigationComponent
    ],
    providers: [ //The service providers for this module

    ],
    exports: [
        navigationComponent
    ],
    bootstrap: [ //The components to be bootstraped by this module

    ],
    entryComponents: [
        navigationComponent
    ]
})
export class navigationModule { }