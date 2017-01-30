import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Custom Components
import { homeComponent } from './home.component';
import { homeDetailComponent } from './home-detail.component';
import { homeListComponent } from './home-list.component';

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