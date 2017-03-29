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
var app_constants_1 = require("../../app.constants");
var delayService = (function () {
    function delayService(http, _appConstants) {
        this.http = http;
        this._appConstants = _appConstants;
    }
    delayService.prototype.getHeaders = function () {
        var headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    };
    /**
     * Get any delays to send to the display component
     * @param  {string}
     * @return {promise}
     */
    delayService.prototype.getAllDelays = function (mode) {
        var params = new http_1.URLSearchParams();
        params.set("app_id", this._appConstants.app_api_id);
        params.set("app_key", this._appConstants.app_api_key);
        params.set("detail", this._appConstants.app_api_detailed_disruptions);
        return this.http
            .get(this._appConstants.api_base_url + "/Line/Mode/" + mode + "/Disruption", {
            headers: this.getHeaders()
        })
            .map(function (res) { return res.json(); })
            .toPromise()
            .catch(this.handleError);
    };
    delayService.prototype.handleError = function (err) {
        console.log("Error", err);
    };
    delayService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, app_constants_1.appConstants])
    ], delayService);
    return delayService;
}());
exports.delayService = delayService;
//# sourceMappingURL=delay.service.js.map