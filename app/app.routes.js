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
var router_1 = require('@angular/router');
var core_1 = require('@angular/core');
var popup_component_1 = require('./shared/components/popup.component');
var wildcard_component_1 = require("./wildcard/wildcard.component");
//Either configure routes in this Routing Module or within the module itself but not in both.
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot([
                    /* Define app module routes here, e.g., to lazily load a module
                      (do not place feature module routes here, use an own -routing.module.ts in the feature instead)
                    */
                    {
                        path: '',
                        redirectTo: '/status/lines',
                        pathMatch: 'full'
                    },
                    {
                        path: '**',
                        component: wildcard_component_1.wildCardComponent
                    },
                    {
                        path: 'compose',
                        component: popup_component_1.popupComponent,
                        outlet: "popup"
                    }
                ])
            ],
            exports: [
                router_1.RouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app.routes.js.map