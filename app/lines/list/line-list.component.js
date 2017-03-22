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
var line_service_1 = require("../../line-area/line.service");
var lineListComponent = (function () {
    function lineListComponent(_lineService) {
        this._lineService = _lineService;
        this.detailedLineInfo = {};
    }
    lineListComponent.prototype.ngOnInit = function () {
    };
    lineListComponent.prototype.expandLineInfo = function (line) {
        var _this = this;
        if (this.detailedViewToggle === true) {
            this.detailedViewToggle = false;
        }
        else if (this.detailedLineInfo.hasOwnProperty("description")) {
            this.detailedViewToggle = true;
        }
        else {
            this._lineService.getDetailedLineInfo(line.id).then(function (response) {
                if (!response) {
                    return false;
                }
                ;
                _this.detailedViewToggle = true;
                if (typeof response === "object" && response.length < 1) {
                    _this.detailedLineInfo = {
                        "description": "No delays found for " + line.name
                    };
                }
                else {
                    _this.detailedLineInfo = {
                        "description": response[0].description
                    };
                }
                ;
            }, function (err) {
                _this.detailedViewToggle = true;
                _this.detailedLineInfo = {
                    "description": "Error: Could not get any data."
                };
            });
        }
    };
    lineListComponent.prototype.sanitizeLineId = function (line) {
        return line.replace(/-/g, "");
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], lineListComponent.prototype, "lineData", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], lineListComponent.prototype, "listType", void 0);
    lineListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'line-list',
            templateUrl: "./line-list.template.html"
        }), 
        __metadata('design:paramtypes', [line_service_1.lineService])
    ], lineListComponent);
    return lineListComponent;
}());
exports.lineListComponent = lineListComponent;
//# sourceMappingURL=line-list.component.js.map