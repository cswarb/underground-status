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
var line_list_component_1 = require('./list/line-list.component');
var line_list_directive_1 = require('./list/line-list.directive');
//Modules
//Global Services
//Routing
// import { popularLinesRoutingModule } from "./popular-lines-routing.module";
var linesModule = (function () {
    function linesModule() {
    }
    linesModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                forms_1.ReactiveFormsModule
            ],
            declarations: [
                line_list_component_1.lineListComponent,
                line_list_directive_1.toggleLineDetailDirective
            ],
            providers: [],
            exports: [
                line_list_component_1.lineListComponent,
                line_list_directive_1.toggleLineDetailDirective
            ],
            bootstrap: [],
            entryComponents: [
                line_list_component_1.lineListComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], linesModule);
    return linesModule;
}());
exports.linesModule = linesModule;
//# sourceMappingURL=lines.module.js.map