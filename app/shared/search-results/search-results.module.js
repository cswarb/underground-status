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
var search_results_component_1 = require('./search-results.component');
//Services
var search_results_service_1 = require("./search-results.service");
var searchResultsModule = (function () {
    function searchResultsModule() {
    }
    searchResultsModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                forms_1.ReactiveFormsModule
            ],
            declarations: [
                search_results_component_1.searchResultsComponent
            ],
            providers: [
                search_results_service_1.searchResultsService
            ],
            exports: [
                search_results_component_1.searchResultsComponent
            ],
            bootstrap: [],
            entryComponents: [
                search_results_component_1.searchResultsComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], searchResultsModule);
    return searchResultsModule;
}());
exports.searchResultsModule = searchResultsModule;
//# sourceMappingURL=search-results.module.js.map