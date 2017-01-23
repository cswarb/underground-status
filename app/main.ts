import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import "rxjs/add/operator/map";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/switchMap"
// import { enableProdMode } from "@angular/core";

import { AppModule } from "./app.module";

// enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule);