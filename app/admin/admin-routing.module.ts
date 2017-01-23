import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard } from '../shared/services/authguard.service';

//Custom Components
import { AdminComponent } from './admin.component';

@NgModule({
    imports: [
        RouterModule.forChild([
        	{ 
          		path: 'admin', 
                component: AdminComponent,
                canActivate: [AuthGuard]
        	}
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class adminRoutingModule { }