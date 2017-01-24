import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

//Import all components at the top level that require routing
//or modules (must set up child routes file and inital components array in module definition)
// import { aboutModule } from "./about/about.module";
import { homeModule } from "./home/home.module";

import { popupComponent } from './shared/components/popup.component';
import { wildCardComponent } from "./wildcard/wildcard.component";


//Either configure routes in this Routing Module or within the module itself but not in both.
@NgModule({
  imports: [
    RouterModule.forRoot([
      /* Define app module routes here, e.g., to lazily load a module
      (do not place feature module routes here, use an own -routing.module.ts in the feature instead)
      */
      { 
          path: '',
          redirectTo: '/',
          pathMatch: 'full' 
      },
      { 
          path: '**', 
          component: wildCardComponent 
      },
      { 
          path: 'compose', 
          component: popupComponent,
          outlet: "popup" 
      }
    ])
  ],
  exports: [
  	RouterModule
  ]
})
export class AppRoutingModule { }