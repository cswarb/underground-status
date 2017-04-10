import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

//Custom Components
import { lineAreaComponent } from "./line-area.component";
import { lineAreaResolver } from "./line-area-resolver.service";

@NgModule({
  imports: [
    RouterModule.forChild([

    ])
  ],
  exports: [
  	RouterModule
  ]
})
export class homeRoutingModule { }