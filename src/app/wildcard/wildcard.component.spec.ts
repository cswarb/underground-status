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
import { wildCardComponent } from "./wildcard.component";
import { popupComponent } from "../shared/popup/popup.component";

//Modules
import { homeModule } from "../home/home.module";

//Routing
import { AppRoutingModule } from "../app.routes";


describe("WildcardComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
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

  it("should render wildcard text", async(() => {
    const fixture = TestBed.createComponent(wildCardComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("h1").textContent).toContain("Oops, nothing found. Try going back home.");
  }));
});