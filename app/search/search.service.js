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
var http_1 = require('@angular/http');
var app_constants_1 = require("../app.constants");
var searchService = (function () {
    function searchService(http, _appConstants) {
        this.http = http;
        this._appConstants = _appConstants;
        this.autoCompleteVals = [];
        this.getHeaders = function () {
            var headers = new Headers();
            headers.append('Accept', 'application/json');
            return headers;
        };
        this.handleError = function (error) {
        };
    }
    ;
    /**
     * Set all possible stations.
     * Used by the autocomplete search
     * @return {array}
     */
    searchService.prototype.setAutoCompleteVals = function (autoCompleteVals) {
        this.autoCompleteVals = autoCompleteVals;
    };
    /**
     * Return all possible stations.
     * Used by the autocomplete search
     * @return {array}
     */
    searchService.prototype.getAutoCompleteVals = function () {
        return this.autoCompleteVals;
    };
    /**
     * See if a string passed in matches an existing one
     * @param  {string}
     * @return {boolean}
     */
    searchService.prototype.isNaptanId = function (naptanId) {
        for (var key in this.autoCompleteVals) {
            if (!this.autoCompleteVals.hasOwnProperty(key))
                continue;
            var obj = this.autoCompleteVals[key];
            if (naptanId === obj.naptanId) {
                return true;
            }
            ;
        }
        return false;
    };
    /**
     * Get the naptanId from the stationName
     * @param  {string}
     * @return {string}
     */
    searchService.prototype.getNaptanId = function (stationName) {
        for (var key in this.autoCompleteVals) {
            if (!this.autoCompleteVals.hasOwnProperty(key))
                continue;
            var obj = this.autoCompleteVals[key];
            for (var prop in obj) {
                if (!obj.hasOwnProperty(prop))
                    continue;
                if (stationName === obj[prop].stationName) {
                    return obj[prop].naptanId;
                }
                ;
            }
        }
        return false;
    };
    /**
     * Get a station disruption
     * Used when clicking an autocomplete result
     * @param  {string}
     * @return {promise}
     */
    searchService.prototype.queryStation = function (naptanId) {
        var params = new http_1.URLSearchParams();
        params.set("getFamily", false);
        params.set("app_id", this._appConstants.app_api_id);
        params.set("app_key", this._appConstants.app_api_key);
        return this.http
            .get(this._appConstants.api_base_url + "/StopPoint/" + naptanId + "/Disruption", {
            headers: this.getHeaders(),
            search: params
        })
            .map(function (res) { return res.json(); })
            .toPromise()
            .catch(this.handleError);
    };
    searchService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, app_constants_1.appConstants])
    ], searchService);
    return searchService;
}());
exports.searchService = searchService;
//# sourceMappingURL=search.service.js.map