import { Injectable } from '@angular/core';
import { CanActivate, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Injectable({
	providedIn: 'root'
})
export class UserPageGuard implements CanActivate {
	constructor(private loginService: LoginService) {}

	canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		return this.loginService.isUserLoggedIn;
	}

}
