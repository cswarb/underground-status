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
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var homeListComponent = (function () {
    function homeListComponent(router) {
        this.router = router;
    }
    homeListComponent.prototype.ngOnInit = function () {
        this.crisis = [{
                "name": "Cookies",
                "id": 1
            }, {
                "name": "Cakes",
                "id": 2
            }, {
                "name": "Biscuits",
                "id": 3
            }];
    };
    homeListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: '',
            template: "\n\t\t<p>Home sub-view - Item List</p>\n\t\t<ul>\n\t\t\t<li *ngFor=\"let item of crisis\">\n\t\t\t\t<a [routerLink]=\"['/detail']\">{{item.name}}</a>\n\t\t\t</li>\n\t\t</ul>\t\n\t\t<router-outlet></router-outlet>\t\n    "
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], homeListComponent);
    return homeListComponent;
}());
exports.homeListComponent = homeListComponent;
//# sourceMappingURL=popular-lines-list.component.js.map