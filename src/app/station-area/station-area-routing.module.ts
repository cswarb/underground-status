import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

//Custom Components
import { stationAreaComponent } from "./station-area.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: "",
        component: stationAreaComponent
      }
    ])
  ],
  exports: [
  	RouterModule
  ]
})
export class stationRoutingModule { }