import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Custom Components
import { homeComponent } from './home.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'lines',
        component: homeComponent
      },
      {
        path: 'stations',
        component: homeComponent
      }
    ])
  ],
  exports: [
  	RouterModule
  ]
})
export class homeRoutingModule { }