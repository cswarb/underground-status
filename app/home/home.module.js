"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//Core imports
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
//Custom Components
var home_component_1 = require('./home.component');
var home_detail_component_1 = require('./home-detail.component');
var home_list_component_1 = require('./home-list.component');
//Modules
var popular_lines_module_1 = require("../popular-lines/popular-lines.module");
//Global Services
//Routing
var home_routing_module_1 = require("./home-routing.module");
var homeModule = (function () {
    function homeModule() {
    }
    homeModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                forms_1.ReactiveFormsModule,
                popular_lines_module_1.popularLinesModule,
                home_routing_module_1.homeRoutingModule
            ],
            declarations: [
                home_component_1.homeComponent,
                home_detail_component_1.homeDetailComponent,
                home_list_component_1.homeListComponent
            ],
            providers: [],
            exports: [
                home_component_1.homeComponent,
                home_detail_component_1.homeDetailComponent,
                home_list_component_1.homeListComponent
            ],
            bootstrap: [],
            entryComponents: [
                home_component_1.homeComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], homeModule);
    return homeModule;
}());
exports.homeModule = homeModule;
//# sourceMappingURL=home.module.js.map