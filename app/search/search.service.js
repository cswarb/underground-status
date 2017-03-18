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
        var _this = this;
        this.http = http;
        this._appConstants = _appConstants;
        this.autoCompleteVals = null;
        this.queryLineList = function (searchTerm) {
            var params = new http_1.URLSearchParams();
            params.set("detail", _this._appConstants.app_detail);
            params.set("app_id", _this._appConstants.app_id);
            params.set("app_key", _this._appConstants.app_key);
            return _this.http
                .get(_this._appConstants.api_base_url + "Line/" + _this.cleanSearchTerm(searchTerm) + "/Status", {
                headers: _this.getHeaders(),
                search: params
            })
                .map(function (res) { return res.json(); })
                .toPromise()
                .catch(_this.handleError);
        };
        this.transformResponse = function (res) {
            var lineData = [];
            for (var i = 0; i < res.length; i++) {
                var line = res[i];
                console.log(line);
                lineData.push(line);
            }
            ;
            return lineData;
            // let line = {
            // 	name: res.name;
            // };
        };
        this.queryStationList = function (searchTerm) {
        };
        this.cleanSearchTerm = function (searchTerm) {
            return searchTerm;
        };
        this.handleError = function (error) {
        };
        this.getHeaders = function () {
            var headers = new Headers();
            headers.append('Accept', 'application/json');
            return headers;
        };
    }
    ;
    searchService.prototype.setAutoCompleteVals = function (autoCompleteVals) {
        this.autoCompleteVals = autoCompleteVals;
    };
    searchService.prototype.getAutoCompleteVals = function () {
        return this.autoCompleteVals;
    };
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
    };
    searchService.prototype.queryStation = function (searchTerm) {
        var params = new http_1.URLSearchParams();
        params.set("getFamily", false);
        params.set("app_id", this._appConstants.app_id);
        params.set("app_key", this._appConstants.app_key);
        return this.http
            .get(this._appConstants.api_base_url + "StopPoint/" + this.getNaptanId(searchTerm) + "/Disruption", {
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