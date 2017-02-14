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
var Subject_1 = require('rxjs/Subject');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/distinctUntilChanged');
require('rxjs/add/operator/switchMap');
var searchComponent = (function () {
    function searchComponent() {
        var _this = this;
        //Create a Subject
        this.modelChanged = new Subject_1.Subject();
        this.debounceValue = 300;
        this.search = function (term) {
            //Force a model change, passing in the term
            _this.modelChanged.next(term);
        };
    }
    searchComponent.prototype.ngOnInit = function () {
        this.modelChanged
            .debounceTime(this.debounceValue) // wait 300ms after the last event before emitting last event
            .distinctUntilChanged() // only emit if value is different from previous value
            .subscribe(function (model) {
            console.log(model);
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], searchComponent.prototype, "filterType", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], searchComponent.prototype, "searchExample", void 0);
    searchComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'search',
            templateUrl: './search.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], searchComponent);
    return searchComponent;
}());
exports.searchComponent = searchComponent;
//# sourceMappingURL=search.component.js.map