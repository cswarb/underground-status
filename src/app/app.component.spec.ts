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
import { AppComponent } from "./app.component";
import { wildCardComponent } from "./wildcard/wildcard.component";
import { popupComponent } from "./shared/popup/popup.component";
import { popupComponentDirective } from "./shared/popup/popup.component.directive";
import { popupComponentResolver } from "./shared/popup/popup-resolver.service";


//Modules
import { homeModule } from "./home/home.module";
import { navigationModule } from "./shared/navigation/navigation.module";

//Global Services
import { delayService } from "./shared/delay/delay.service";

//Routing
import { AppRoutingModule } from "./app.routes";

//Constants
import { appConstants } from "./app.constants";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        wildCardComponent,
        popupComponent,
        popupComponentDirective
      ],
      imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        homeModule,
        navigationModule,
        AppRoutingModule
      ],
      providers: [
        appConstants,
        delayService,
        popupComponentResolver,
        { provide: APP_BASE_HREF, useValue: "/" },
        { provide: XHRBackend, useClass: MockBackend }
      ]
    }).compileComponents();
  }));

  it("should create the app", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it("should render the footer text", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(".footer__text").textContent).toContain("Made by: chrismakesweb.co.uk");
  }));

  it("has rendered the navigation", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(".navigation__bar__item--link.navigation__bar__text").textContent)
    .toContain("Transport for London Service Checker");
  }));
});