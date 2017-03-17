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
var app_component_1 = require('./app.component');
var wildcard_component_1 = require('./wildcard/wildcard.component');
var popup_component_1 = require('./shared/components/popup.component');
var navigation_component_1 = require('./navigation/navigation.component');
//Modules
var home_module_1 = require("./home/home.module");
var admin_module_1 = require("./admin/admin.module");
//Global Services
var test_service_1 = require("./shared/services/test.service");
var authguard_service_1 = require("./shared/services/authguard.service");
var auth_service_1 = require("./shared/services/auth.service");
var delay_service_1 = require("./shared/delay/delay.service");
//Routing
var app_routes_1 = require('./app.routes');
//Constants
var app_constants_1 = require("./app.constants");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                forms_1.ReactiveFormsModule,
                home_module_1.homeModule,
                admin_module_1.adminModule,
                app_routes_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                wildcard_component_1.wildCardComponent,
                popup_component_1.popupComponent,
                navigation_component_1.navigationComponent
            ],
            providers: [
                app_constants_1.appConstants,
                test_service_1.testService,
                authguard_service_1.AuthGuard,
                auth_service_1.AuthService,
                delay_service_1.delayService
            ],
            bootstrap: [
                app_component_1.AppComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map