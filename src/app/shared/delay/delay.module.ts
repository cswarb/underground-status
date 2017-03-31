//Core imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

//Custom Components
import { delayComponent } from './delay.component';

@NgModule({
    imports: [ //All the required additional modules for this module
    	BrowserModule,
    	FormsModule,
    	HttpModule,
    	JsonpModule,
    	ReactiveFormsModule
    ],
    declarations: [ //The components, directives, and pipes for this module
        delayComponent
    ],
    providers: [ //The service providers for this module
    ],
    exports: [
        delayComponent
    ],
    bootstrap: [ //The components to be bootstraped by this module
    	
    ],
    entryComponents: [
        delayComponent
    ]
})
export class delayModule { }