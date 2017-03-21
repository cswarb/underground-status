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
        //Inputs from parent components
        this.filterType = "station";
        this.searchExample = "";
        this.searchString = "";
        this.autoCompleteVals = [];
        this.searchResults = [];
        //Outputs to parent components
        this.searchResultUpdated = new core_1.EventEmitter();
        this.autocompleteFilteredList = [];
        this.hasSearchResults = false;
        this.showAutocompleteUI = false;
        //Create a Subject we can subscribe to when the mode changes
        this.modelChanged = new Subject_1.Subject();
        this.debounceValue = 300;
        this.search = function (term) {
            //Force a model change, passing in the term
            _this.modelChanged.next(term);
        };
    }
    searchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._searchService.setAutoCompleteVals(this.autoCompleteVals);
        this.modelChanged
            .debounceTime(this.debounceValue) // wait 300ms after the last event before emitting last event
            .distinctUntilChanged() // only emit if value is different from previous value
            .subscribe(function (searchTerm) {
            console.log("subscribe ", searchTerm);
            if (searchTerm.length > 3) {
                if (_this.filterType === "station") {
                    _this._searchService.queryStation(searchTerm).then(function (res) {
                        if (!res || res.httpStatusCode === 404) {
                            return false;
                        }
                        ;
                        if (res.length < 1) {
                            _this.hasSearchResults = false;
                        }
                        else {
                            _this.hasSearchResults = true;
                            _this.hideAutocomplete();
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
    searchComponent.prototype.searchResultChanged = function (delta) {
        this.searchResultUpdated.next(delta);
    };
    searchComponent.prototype.handleStationDistruption = function (disruption) {
        //Only return the results that are from the tube
        this.searchResults = disruption.filter(function (value) {
            return value.mode === "tube";
        });
        //Cause a change to update the search result component
        this.searchResultChanged(this.searchResults);
    };
    searchComponent.prototype.selectStation = function (station) {
        this.model = station.stationName;
        this.modelChanged.next(station.naptanId);
    };
    searchComponent.prototype.showAutocomplete = function () {
        this.showAutocompleteUI = true;
    };
    searchComponent.prototype.hideAutocomplete = function (event) {
        // console.log(this.myElement.nativeElement);
        this.showAutocompleteUI = false;
        if (false) {
            this.autocompleteFilteredList = _.cloneDeep(this.autoCompleteVals);
        }
        ;
    };
    searchComponent.prototype.filterAutocomplete = function (search, event) {
        search.value.length > 1 ? this.showAutocomplete() : this.hideAutocomplete();
        if (event.isTrusted) {
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
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], searchComponent.prototype, "searchResults", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], searchComponent.prototype, "searchResultUpdated", void 0);
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