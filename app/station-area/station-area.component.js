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
var station_service_1 = require("./station.service");
var delay_service_1 = require("../shared/services/delay.service");
var stationAreaComponent = (function () {
    function stationAreaComponent(_stationService, _delayService) {
        this._stationService = _stationService;
        this._delayService = _delayService;
        this.filterType = "station";
        this.searchExample = "Bank";
    }
    stationAreaComponent.prototype.ngOnInit = function () {
        this.getAllStations();
        this.getAllDelays();
    };
    stationAreaComponent.prototype.getAllDelays = function () {
        var _this = this;
        this._delayService.getAllDelays("tube").then(function (response) {
            _this.delays = response;
            console.log(response);
        }, function (err) {
            console.log(err);
        });
    };
    stationAreaComponent.prototype.getAllStations = function () {
        var _this = this;
        this._stationService.getAllPossibleStations().then(function (response) {
            //Filter some popular lines - just get every couple for now
            _this.popularStations = response.filter(function (value, iterator) {
                if (iterator % 2) {
                    return value;
                }
                ;
            });
            //Convert to array of name only
            _this.popularStationsArray = _this.popularStations.map(function (value, iterator) {
                return value.id;
            });
            //Get line statuses passing an array and reassign popularStations
            _this._stationService.getPopularStationStatuses(_this.popularStationsArray).then(function (popularStationsData) {
                _this.popularStations = popularStationsData;
            }, function (err) {
                console.log("error: ", err);
            });
        }, function (err) {
            console.log("error: ", err);
        });
    };
    stationAreaComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: '',
            template: "\n\t\t<article class=\"\">\n\n            <filters style=\"display:block;width:100%\"></filters>\n            \n            <section class=\"undergroundline\">\n\t            <search [filterType]=\"filterType\" [searchExample]=\"searchExample\" style=\"display:block;width:100%\"></search>\n\n\t\t\t\t<emergency-delays [delays]=\"delays\"></emergency-delays>\n\n\t            {{lineData | json}}\n\n\t            <line-list [popularItems]=\"popularStations\" style=\"display:block;width:100%\"></line-list>\n            </section>\n                  \n        </article>\n    "
        }), 
        __metadata('design:paramtypes', [station_service_1.stationService, delay_service_1.delayService])
    ], stationAreaComponent);
    return stationAreaComponent;
}());
exports.stationAreaComponent = stationAreaComponent;
//# sourceMappingURL=station-area.component.js.map