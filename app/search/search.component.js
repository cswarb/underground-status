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
var search_service_1 = require("./search.service");
var Subject_1 = require('rxjs/Subject');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/distinctUntilChanged');
require('rxjs/add/operator/switchMap');
var _ = require("lodash");
var searchComponent = (function () {
    function searchComponent(_searchService, myElement) {
        var _this = this;
        this._searchService = _searchService;
        this.myElement = myElement;
        this.autocompleteFilteredList = [];
        this.results = [];
        this.showAutocomplete = false;
        //Create a Subject
        this.modelChanged = new Subject_1.Subject();
        this.debounceValue = 300;
        this.search = function (term) {
            //Force a model change, passing in the term
            _this.modelChanged.next(term);
        };
    }
    searchComponent.prototype.handleStationDistruption = function (disruption) {
        this.results = disruption.filter(function (value) {
            return value.mode === "tube";
        });
    };
    searchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._searchService.setAutoCompleteVals(this.autoCompleteVals);
        this.modelChanged
            .debounceTime(this.debounceValue) // wait 300ms after the last event before emitting last event
            .distinctUntilChanged() // only emit if value is different from previous value
            .subscribe(function (searchTerm) {
            if (searchTerm.length > 3) {
                if (_this.filterType === "station") {
                    _this._searchService.queryStation(searchTerm).then(function (res) {
                        console.log(res);
                        if (res.httpStatusCode === 404 || !res) {
                            return false;
                        }
                        ;
                        _this.handleStationDistruption(res);
                    }, function (err) {
                        console.log(err);
                    });
                }
                else {
                    _this._searchService.queryLineList(searchTerm).then(function (res) {
                        console.log(res);
                    }, function (err) {
                        console.log(err);
                    });
                }
                ;
            }
            ;
        });
    };
    searchComponent.prototype.selectStation = function (station) {
        this.model = station.naptanId;
        this.modelChanged.next(this.model);
    };
    searchComponent.prototype.revealAutocomplete = function () {
        this.showAutocomplete = true;
    };
    searchComponent.prototype.hideAutocomplete = function (event) {
        console.log(this.myElement.nativeElement);
        console.log(event.target);
        if (false) {
            this.showAutocomplete = false;
            this.autocompleteFilteredList = _.cloneDeep(this.autoCompleteVals);
        }
        ;
    };
    searchComponent.prototype.filterAutocomplete = function (search, event) {
        if (event.isTrusted) {
            // console.log(search.value, " :search");
            // console.log(this, " :search");
            //now filter the list and remove the values from the array
            // console.log(this.autocompleteFilteredList);
            // console.log(this.autoCompleteVals);
            this.autoCompleteVals = this.autoCompleteVals.filter(function (value, iterator) {
                if (value.stationName.match(new RegExp(search.value, "i"))) {
                    return value;
                }
                ;
            });
        }
        ;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], searchComponent.prototype, "filterType", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], searchComponent.prototype, "searchExample", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], searchComponent.prototype, "searchString", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], searchComponent.prototype, "autoCompleteVals", void 0);
    searchComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'search',
            templateUrl: './search.component.html'
        }), 
        __metadata('design:paramtypes', [search_service_1.searchService, core_1.ElementRef])
    ], searchComponent);
    return searchComponent;
}());
exports.searchComponent = searchComponent;
//# sourceMappingURL=search.component.js.map