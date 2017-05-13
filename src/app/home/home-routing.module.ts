import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

//Custom Components
import { homeComponent } from "./home.component";
import { lineAreaComponent } from "../line-area/line-area.component";
import { stationAreaComponent } from "../station-area/station-area.component";

import { lineAreaResolver } from "../line-area/line-area-resolver.service";
import { stationAreaResolver } from "../station-area/station-area-resolver.service";
import { delayResolver } from "../shared/delay/delay-resolver.service";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: "status",
        component: homeComponent,
        children: [
          {
            path: "lines",
            component: lineAreaComponent,
            resolve: {
              lines: lineAreaResolver,
              delays: delayResolver
            }
          },
          {
            path: "stations",
            component: stationAreaComponent,
            resolve: {
              lines: stationAreaResolver,
              delays: delayResolver
            }
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