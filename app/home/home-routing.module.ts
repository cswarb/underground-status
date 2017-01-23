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
        path: '',
        component: homeComponent,
        children: [
          {
            path: '',
            component: homeListComponent,
            children: [
              {
                path: 'detail',
                component: homeDetailComponent
              }
            ]
          }
        ]
      }
    ])
  ],
  exports: [
  	RouterModule
  ]
})
export class homeRoutingModule { }