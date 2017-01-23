import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

//Custom Components
import { AboutComponent } from './about.component';

@NgModule({
    imports: [
        RouterModule.forChild([
        	{ 
          		path: 'about', 
                component: AboutComponent 
        	}
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class aboutRoutingModule { }