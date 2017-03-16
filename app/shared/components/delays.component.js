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
var delayComponent = (function () {
    function delayComponent() {
    }
    delayComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], delayComponent.prototype, "delays", void 0);
    delayComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'emergency-delays',
            template: "\n\t\t<div *ngFor=\"let delay of delays\" class=\"delay\">\n\t\t\t<div class=\"delay__wrapper\">\n\t\t\t\t<p>{{delay?.description}}</p>\n\t\t\t\t<p *ngIf=\"delay.affectedRoutes.length > 0\">{{delay?.affectedRoutes}}</p>\n\t\t\t\t<p *ngIf=\"delay.affectedStops.length > 0\">{{delay?.affectedStops}}</p>\n\t\t\t</div>\n\t\t</div>\t\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], delayComponent);
    return delayComponent;
}());
exports.delayComponent = delayComponent;
//# sourceMappingURL=delays.component.js.map