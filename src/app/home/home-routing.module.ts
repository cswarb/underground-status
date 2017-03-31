import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Custom Components
import { homeComponent } from './home.component';
import { lineAreaComponent } from '../line-area/line-area.component';
import { stationAreaComponent } from '../station-area/station-area.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'status',
        component: homeComponent,
        children: [
          {
            path: 'lines',
            component: lineAreaComponent
          },
          {
            path: 'stations',
            component: stationAreaComponent
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