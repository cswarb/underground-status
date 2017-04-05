import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

//Custom Components
import { lineAreaComponent } from "./line-area.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: "",
        component: lineAreaComponent
      }
    ])
  ],
  exports: [
  	RouterModule
  ]
})
export class homeRoutingModule { }