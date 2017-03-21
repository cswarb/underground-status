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
var lineListComponent = (function () {
    function lineListComponent() {
        this.isLineExpanded = false;
        this.detailedLineEvent = new core_1.EventEmitter();
    }
    lineListComponent.prototype.ngOnInit = function () {
    };
    lineListComponent.prototype.expandLineInfo = function (line) {
        this.isLineExpanded = !this.isLineExpanded;
        this.detailedLineEvent.next(line);
    };
    lineListComponent.prototype.sanitizeLineId = function (line) {
        return line.replace(/-/g, "");
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], lineListComponent.prototype, "popularItems", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], lineListComponent.prototype, "listType", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], lineListComponent.prototype, "detailedLineInfo", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], lineListComponent.prototype, "detailedLineEvent", void 0);
    lineListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'line-list',
            templateUrl: "./line-list.template.html"
        }), 
        __metadata('design:paramtypes', [])
    ], lineListComponent);
    return lineListComponent;
}());
exports.lineListComponent = lineListComponent;
//# sourceMappingURL=line-list.component.js.map