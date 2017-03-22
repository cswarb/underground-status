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
var line_service_1 = require("./line.service");
var delay_service_1 = require("../shared/delay/delay.service");
var lineAreaComponent = (function () {
    function lineAreaComponent(_lineService, _delayService) {
        this._lineService = _lineService;
        this._delayService = _delayService;
        this.filterType = "line";
        this.searchExample = "Circle";
        this.listType = "Lines";
        this.searchString = "";
        this.detailedViewToggle = false;
    }
    lineAreaComponent.prototype.ngOnInit = function () {
        this.getAllLinesStatuses();
        this.getAllDelays();
    };
    lineAreaComponent.prototype.getDetailedLineInfo = function (line) {
        var _this = this;
        this._lineService.getDetailedLineInfo(line.id).then(function (response) {
            if (!response) {
                return false;
            }
            ;
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
            _this.detailedLineInfo = {
                "description": "Error: Could not get any data."
            };
        });
    };
    lineAreaComponent.prototype.getAllDelays = function () {
        var _this = this;
        this._delayService.getAllDelays("tube").then(function (response) {
            _this.delays = response;
        }, function (err) {
            console.log(err);
        });
    };
    lineAreaComponent.prototype.getAllLinesStatuses = function () {
        var _this = this;
        this._lineService.getAllLineStatuses("tube").then(function (response) {
            _this.allLineStatuses = response;
        }, function (err) {
            console.log("error: ", err);
        });
    };
    lineAreaComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: '',
            template: "\n\t\t<article class=\"\">\n\n            <filters></filters>\n\n            <emergency-delays [delays]=\"delays\"></emergency-delays>\n            \n            <section class=\"undergroundline\">\n\t            <line-list (detailedLineEvent)=\"getDetailedLineInfo($event)\" [detailedViewToggle]=\"detailedViewToggle\" [detailedLineInfo]=\"detailedLineInfo\" [allLineStatuses]=\"allLineStatuses\" [listType]=\"listType\"></line-list>\n            </section>\n\n        </article>\n    "
        }), 
        __metadata('design:paramtypes', [line_service_1.lineService, delay_service_1.delayService])
    ], lineAreaComponent);
    return lineAreaComponent;
}());
exports.lineAreaComponent = lineAreaComponent;
//# sourceMappingURL=line-area.component.js.map