"use strict";
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
require("rxjs/add/operator/map");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
require("rxjs/add/operator/switchMap");
// import { enableProdMode } from "@angular/core";
var app_module_1 = require("./app.module");
// enableProdMode();
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map