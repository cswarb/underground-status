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
var line_area_component_1 = require('./line-area.component');
//Modules
var lines_module_1 = require("../lines/lines.module");
var filter_module_1 = require("../filter/filter.module");
var search_module_1 = require("../search/search.module");
//Global Services
var line_service_1 = require("./line.service");
//Routing
// import { homeRoutingModule } from "../home/home-routing.module";
var lineAreaModule = (function () {
    function lineAreaModule() {
    }
    lineAreaModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                forms_1.ReactiveFormsModule,
                lines_module_1.linesModule,
                filter_module_1.filterModule,
                search_module_1.searchModule
            ],
            declarations: [
                line_area_component_1.lineAreaComponent
            ],
            providers: [
                line_service_1.lineService
            ],
            exports: [
                line_area_component_1.lineAreaComponent
            ],
            bootstrap: [],
            entryComponents: [
                line_area_component_1.lineAreaComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], lineAreaModule);
    return lineAreaModule;
}());
exports.lineAreaModule = lineAreaModule;
//# sourceMappingURL=line-area.module.js.map