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
var line_service_1 = require("../line-area/line.service");
var delay_service_1 = require("../shared/delay/delay.service");
var stationAreaComponent = (function () {
    function stationAreaComponent(_stationService, _delayService, _lineService) {
        this._stationService = _stationService;
        this._delayService = _delayService;
        this._lineService = _lineService;
        this.filterType = "station";
        this.searchExample = "Bank";
        this.listType = "Stations";
        this.searchString = "";
        this.searchResults = [];
        this.allLines = [];
        this.stationsList = [];
        this.itemsProcessed = 0;
    }
    stationAreaComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Determine if we should get a new list of stations, or ones from cache
        if (!this._stationService.getStations()) {
            this.getAllLines(function () {
                _this.getAllStations();
            });
        }
        else {
            this.stationsList = this._stationService.getStations();
        }
        ;
        //Get all the delays
        this.getAllDelays();
    };
    stationAreaComponent.prototype.searchResultHasUpdated = function (delta) {
        console.log("delta2: ", delta);
        this.searchResults = delta;
    };
    stationAreaComponent.prototype.clearSearchResults = function (delta) {
        this.searchResults = [];
    };
    stationAreaComponent.prototype.getAllDelays = function () {
        var _this = this;
        this._delayService.getAllDelays("tube").then(function (response) {
            _this.delays = response;
        }, function (err) {
            console.log(err);
        });
    };
    stationAreaComponent.prototype.createStationLookup = function (lineId, stationsForLine) {
        var _this = this;
        var stations = stationsForLine;
        stations.map(function (value, iterator) {
            if (_this._stationService.isTubeStationType(value) && value.hasOwnProperty("commonName") && value.hasOwnProperty("naptanId")) {
                _this.stationsList.push({
                    "parentLine": lineId,
                    "stationName": value.commonName,
                    "naptanId": value.naptanId
                });
            }
            ;
        });
    };
    stationAreaComponent.prototype.stationListReady = function () {
        //Set the stations to cache them
        this._stationService.setStations(this.stationsList);
        //Assign them to the components model value
        this.stationsList = this._stationService.getStations();
    };
    stationAreaComponent.prototype.getAllStations = function () {
        var _this = this;
        //Go through each of the lines, get all stations from them, and create a lookup object
        //so we can use this data as autocomplete data, search and filter stations at a later point in time
        this.allLines.forEach(function (lineId) {
            _this._stationService.getStationsFromLine(lineId).then(function (response) {
                _this.itemsProcessed++;
                _this.createStationLookup(lineId, response);
                if (_this.itemsProcessed === _this.allLines.length) {
                    _this.stationListReady();
                }
                ;
            });
        });
    };
    stationAreaComponent.prototype.getAllLines = function (callback) {
        var _this = this;
        //Get all the possible lines
        this._lineService.getAllPossibleLines().then(function (response) {
            //Convert to array of line id only
            _this.allLines = response.map(function (value, iterator) {
                return value.id;
            });
            callback();
        }, function (err) {
            console.log("error: ", err);
        });
    };
    stationAreaComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: '',
            template: "\n\t\t<article class=\"\">\n\n            <filters></filters>\n\n            <emergency-delays [delays]=\"delays\"></emergency-delays>\n            \n            <section class=\"undergroundline\">\n\t            <search (searchResultUpdated)=\"searchResultHasUpdated($event)\" \n\t            \t(clearSearchResults)=\"clearSearchResults($event)\" \n\t            \t[filterType]=\"filterType\" \n\t            \t[searchResults]=\"searchResults\" \n\t            \t[searchExample]=\"searchExample\" \n\t            \t[searchString]=\"searchString\" \n\t            \t[autoCompleteVals]=\"stationsList\">\n\t            </search>\n\n\t            <search-results [searchResults]=\"searchResults\"></search-results>\n            </section>\n                  \n        </article>\n    "
        }), 
        __metadata('design:paramtypes', [station_service_1.stationService, delay_service_1.delayService, line_service_1.lineService])
    ], stationAreaComponent);
    return stationAreaComponent;
}());
exports.stationAreaComponent = stationAreaComponent;
//# sourceMappingURL=station-area.component.js.map