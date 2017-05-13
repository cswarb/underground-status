import { Component, OnInit } from "@angular/core";

import { Router, Event as RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from "@angular/router"

@Component({
    moduleId: module.id,
    selector: "[app-component]",
    templateUrl: "./app.template.html"
})
export class AppComponent implements OnInit {
	loading: boolean = false;

	constructor(private router: Router) {}

	ngOnInit() {
		this.setupLoading();
	}

	private setupLoading(): void {
		this.router.events.subscribe((event: RouterEvent) => {
            this.navigationInterceptor(event);
        });
	}

	private navigationInterceptor(event: RouterEvent): void {
        if (event instanceof NavigationStart) {
			this.loading = true;
        } else if(event instanceof NavigationCancel || event instanceof NavigationError || event instanceof NavigationEnd) {
			this.loading = false;
        };
    }

}