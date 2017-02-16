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
var home_routing_module_1 = require("../home/home-routing.module");
//Custom Components
var search_component_1 = require('./search.component');
//services
var search_service_1 = require('./search.service');
var searchModule = (function () {
    function searchModule() {
    }
    searchModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                forms_1.ReactiveFormsModule,
                home_routing_module_1.homeRoutingModule
            ],
            declarations: [
                search_component_1.searchComponent
            ],
            providers: [
                search_service_1.searchService
            ],
            exports: [
                search_component_1.searchComponent
            ],
            bootstrap: [],
            entryComponents: [
                search_component_1.searchComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], searchModule);
    return searchModule;
}());
exports.searchModule = searchModule;
//# sourceMappingURL=search.module.js.map