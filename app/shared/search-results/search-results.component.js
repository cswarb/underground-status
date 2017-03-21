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
var searchResultsComponent = (function () {
    function searchResultsComponent() {
        this.searchResults = [];
        this.clearSearchResults = new core_1.EventEmitter();
    }
    searchResultsComponent.prototype.ngOnInit = function () {
    };
    searchResultsComponent.prototype.clearResults = function (delta) {
        this.clearSearchResults.next(delta);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], searchResultsComponent.prototype, "searchResults", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], searchResultsComponent.prototype, "clearSearchResults", void 0);
    searchResultsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'search-results',
            template: "\n    \t<div *ngIf=\"searchResults.length < 1\" class=\"center\">\n\t\t\t<h4 class=\"ui-helper\">Search for a station.</h4>\n    \t</div>\n\t\t<div *ngIf=\"searchResults.length > 0\">\n\t\t\t<div (click)=\"clearResults()\">X</div>\n\t\t\t<div class=\"result__block\" *ngFor=\"let result of searchResults\" class=\"result__wrapper\">\n\t\t\t\t<p class=\"result__item result__title\">{{result?.commonName}}</p>\n\t\t\t\t<p class=\"result__item result__description\">{{result?.description}}</p>\n\t\t\t\t<p class=\"result__item result__helper\" [innerHTML]=\"result?.additionalInformation\"></p>\n\t\t\t</div>\n\t\t</div>\t\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], searchResultsComponent);
    return searchResultsComponent;
}());
exports.searchResultsComponent = searchResultsComponent;
//# sourceMappingURL=search-results.component.js.map