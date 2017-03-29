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
var lineService = (function () {
    function lineService(http, _appConstants) {
        this.http = http;
        this._appConstants = _appConstants;
    }
    lineService.prototype.getHeaders = function () {
        var headers = new Headers();
        headers.append("Accept", "application/json");
        return headers;
    };
    /**
     * Used when the user clicks for more details of a specific line on the lineList components
     * @param  {string}
     * @return {promise}
     */
    lineService.prototype.getDetailedLineInfo = function (lineId) {
        var params = new http_1.URLSearchParams();
        params.set("app_id", this._appConstants.app_api_id);
        params.set("app_key", this._appConstants.app_api_key);
        params.set("detail", this._appConstants.app_api_detailed_disruptions);
        return this.http
            .get(this._appConstants.api_base_url + "/Line/" + lineId + "/Disruption", {
            headers: this.getHeaders()
        })
            .map(function (res) { return res.json(); })
            .toPromise()
            .catch(this.handleError);
    };
    /**
     * Get all the possible lines
     * Used on the stationArea component to then find all stations from the line
     * @return {promise}
     */
    lineService.prototype.getAllPossibleLines = function () {
        var params = new http_1.URLSearchParams();
        params.set("detail", this._appConstants.app_detail);
        params.set("app_id", this._appConstants.app_id);
        params.set("app_key", this._appConstants.app_key);
        return this.http
            .get(this._appConstants.api_base_url + "/Line/Mode/tube", {
            headers: this.getHeaders()
        })
            .map(function (res) { return res.json(); })
            .toPromise()
            .catch(this.handleError);
    };
    /**
     * Used by the lineArea component to get all tube line statuses
     * @param  {string}
     * @return {promise}
     */
    lineService.prototype.getAllLineStatuses = function (type) {
        var params = new http_1.URLSearchParams();
        params.set("app_id", this._appConstants.app_api_id);
        params.set("app_key", this._appConstants.app_api_key);
        params.set("detail", this._appConstants.app_api_detailed_disruptions);
        return this.http
            .get(this._appConstants.api_base_url + "/Line/Mode/" + type + "/Status", {
            headers: this.getHeaders()
        })
            .map(function (res) { return res.json(); })
            .toPromise()
            .catch(this.handleError);
    };
    lineService.prototype.handleError = function () {
        console.log("Error");
    };
    lineService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, app_constants_1.appConstants])
    ], lineService);
    return lineService;
}());
exports.lineService = lineService;
//# sourceMappingURL=line.service.js.map