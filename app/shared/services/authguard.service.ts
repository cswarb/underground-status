import { Injectable }     from '@angular/core';
import {
  CanActivate, 
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { AuthService }    from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private _AuthService: AuthService, private router: Router) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		let url: string = state.url

		//Check the login
		return this.checkLogin(url);
	}

	checkLogin(url: string) {
		if(this._AuthService.isLoggedIn) {
			//They are authenticated
			return true;
		}

		//Store a redirect url for after login
		this._AuthService.setRedirectUrl(url);

		//Go to login
		this.router.navigate(["/login"]);

		return false;
	}
}