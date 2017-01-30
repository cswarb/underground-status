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
var test_service_1 = require("../shared/services/test.service");
var lineAreaComponent = (function () {
    function lineAreaComponent(_testService) {
        this._testService = _testService;
        this.filterType = "line";
        this.searchExample = "Circle";
    }
    lineAreaComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    lineAreaComponent.prototype.getData = function () {
        var _this = this;
        this._testService.getPromiseData().then(function (response) {
            console.log(response);
            _this.lineData = response.data;
        }, function (err) {
            console.log("error: ", err);
        });
    };
    lineAreaComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: '',
            template: "\n\t\t<article class=\"\">\n\n            <filters style=\"display:block;width:100%\"></filters>\n            \n            <section class=\"undergroundline\">\n\t            <search [filterType]=\"filterType\" [searchExample]=\"searchExample\" style=\"display:block;width:100%\"></search>\n\n\t            {{lineData | json}}\n\n\t            <line-list style=\"display:block;width:100%\"></line-list>\n            </section>\n\n        </article>\n    "
        }), 
        __metadata('design:paramtypes', [test_service_1.testService])
    ], lineAreaComponent);
    return lineAreaComponent;
}());
exports.lineAreaComponent = lineAreaComponent;
//# sourceMappingURL=line-area.component.js.map