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
var router_1 = require('@angular/router');
var animations_1 = require('../../animations');
var popupComponent = (function () {
    function popupComponent(router) {
        this.router = router;
        this.routeAnimation = true;
    }
    popupComponent.prototype.ngOnInit = function () {
    };
    popupComponent.prototype.close = function () {
        this.router.navigate([{ outlets: { popup: null } }]);
    };
    __decorate([
        core_1.HostBinding('@routeAnimation'), 
        __metadata('design:type', Object)
    ], popupComponent.prototype, "routeAnimation", void 0);
    popupComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: '',
            template: "\n\t\t<div class=\"popup\">\n\t\t\t<h2>Popup</h2>\n\t\t\t<button type=\"button\" (click)=\"close()\">Close</button>\n\t\t</div>\t\n    ",
            styles: [
                "\n\t\t.popup {\n\t\t\tposition: absolute;\n\t\t\tbottom:0;\n\t\t\tright: 1rem;\n\t\t\tbackground-color: #fff;\n\t\t\twidth: 20rem;\n\t\t\theight: auto;\n\t\t\tdisplay: block;\n\t\t\tborder: 1px solid grey;\n\t\t    border-radius: 3px;\n\t\t    padding: 1rem;\n\t\t    font-family: sans-serif;\n\t\t}\t\n    "
            ],
            animations: [
                animations_1.slideInDownAnimation
            ]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], popupComponent);
    return popupComponent;
}());
exports.popupComponent = popupComponent;
//# sourceMappingURL=popup.component.js.map