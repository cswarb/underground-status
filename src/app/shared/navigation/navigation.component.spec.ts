import { TestBed, async } from "@angular/core/testing";

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { APP_BASE_HREF } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule, Http, JsonpModule, XHRBackend  } from "@angular/http";
import { MockBackend } from "@angular/http/testing";
import { Routes, RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

//Custom Components
import { navigationComponent } from "./navigation.component";
import { wildCardComponent } from "../../wildcard/wildcard.component";
import { popupComponent } from "../popup/popup.component";

//Modules
import { homeModule } from "../../home/home.module";

//Routing
import { AppRoutingModule } from "../../app.routes";


describe("navigationComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        navigationComponent,
        wildCardComponent,
        popupComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        homeModule,
        AppRoutingModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: "/" },
        { provide: XHRBackend, useClass: MockBackend }
      ]
    }).compileComponents();
  }));

  it("should render navigation text", async(() => {
    const fixture = TestBed.createComponent(navigationComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("h1").textContent).toContain("Transport for London Service Checker");
  }));
});