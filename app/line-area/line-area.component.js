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
var lineAreaComponent = (function () {
    function lineAreaComponent(_lineService) {
        this._lineService = _lineService;
        this.filterType = "line";
        this.searchExample = "Circle";
        this.searchData = { "search": "data" };
    }
    lineAreaComponent.prototype.ngOnInit = function () {
        this.getAllLines();
    };
    lineAreaComponent.prototype.getAllLines = function () {
        var _this = this;
        this._lineService.getAllPossibleLines().then(function (response) {
            //Filter some popular lines - just get every couple for now
            _this.popularLines = response.filter(function (value, iterator) {
                if (iterator % 2) {
                    return value;
                }
                ;
            });
            //Convert to array of name only
            _this.popularLinesArray = _this.popularLines.map(function (value, iterator) {
                return value.id;
            });
            //Get line statuses passing an array and reassign popularLines
            _this._lineService.getPopularLineStatuses(_this.popularLinesArray).then(function (popularLinesData) {
                _this.popularLines = popularLinesData;
            }, function (err) {
                console.log("error: ", err);
            });
        }, function (err) {
            console.log("error: ", err);
        });
    };
    lineAreaComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: '',
            template: "\n\t\t<article class=\"\">\n\n            <filters style=\"display:block;width:100%\"></filters>\n            \n            <section class=\"undergroundline\">\n\t            <search [filterType]=\"filterType\" [searchExample]=\"searchExample\" [searchData]=\"searchData\" style=\"display:block;width:100%\"></search>\n\n\t            <line-list [popularItems]=\"popularLines\" style=\"display:block;width:100%\"></line-list>\n            </section>\n\n        </article>\n    "
        }), 
        __metadata('design:paramtypes', [line_service_1.lineService])
    ], lineAreaComponent);
    return lineAreaComponent;
}());
exports.lineAreaComponent = lineAreaComponent;
//# sourceMappingURL=line-area.component.js.map