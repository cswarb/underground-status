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
var core_1 = require("@angular/core");
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
require('rxjs/Rx');
var app_constants_1 = require("../app.constants");
var stationService = (function () {
    function stationService(http, _appConstants) {
        this.http = http;
        this._appConstants = _appConstants;
        this.stations = null;
    }
    stationService.prototype.getHeaders = function () {
        var headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    };
    stationService.prototype.setStations = function (stations) {
        this.stations = stations;
    };
    stationService.prototype.getStations = function () {
        return this.stations;
    };
    stationService.prototype.getStationsFromLine = function (lineId) {
        var params = new http_1.URLSearchParams();
        params.set("detail", this._appConstants.app_detail);
        params.set("app_id", this._appConstants.app_id);
        params.set("app_key", this._appConstants.app_key);
        return this.http
            .get(this._appConstants.api_base_url + "Line/" + lineId + "/StopPoints", {
            headers: this.getHeaders(),
            search: params
        })
            .map(function (res) { return res.json(); })
            .toPromise()
            .catch(this.handleError);
    };
    stationService.prototype.isTubeStationType = function (val) {
        if (val.modes.indexOf("tube") > -1) {
            return true;
        }
        ;
        return false;
    };
    stationService.prototype.getAllPossibleStations = function () {
        return this.stationsList;
    };
    stationService.prototype.getPopularStationStatuses = function (ids) {
        var params = new http_1.URLSearchParams();
        params.set("detail", this._appConstants.app_detail);
        params.set("app_id", this._appConstants.app_id);
        params.set("app_key", this._appConstants.app_key);
        return this.http
            .get(tfl.api_base_url + "/Line/" + ids + "/Status", {
            headers: this.getHeaders(),
            search: params
        })
            .map(function (res) { return res.json(); })
            .toPromise()
            .catch(this.handleError);
    };
    stationService.prototype.getStation = function (id) {
        var params = new http_1.URLSearchParams();
        params.set("detail", this._appConstants.app_detail);
        params.set("app_id", this._appConstants.app_id);
        params.set("app_key", this._appConstants.app_key);
        return this.http
            .get(tfl.api_base_url + "/Line/" + id + "/Status", {
            headers: this.getHeaders(),
            search: params
        })
            .map(function (res) { return res.json(); })
            .toPromise()
            .catch(this.handleError);
    };
    stationService.prototype.handleError = function (err) {
        console.log("Error", err);
    };
    stationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, app_constants_1.appConstants])
    ], stationService);
    return stationService;
}());
exports.stationService = stationService;
//# sourceMappingURL=station.service.js.map