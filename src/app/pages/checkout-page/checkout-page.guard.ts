import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { LoginService } from "src/app/services/login.service";

@Injectable({
	providedIn: "root"
})
export class CheckoutPageGuard implements CanActivate {
	constructor(private loginService: LoginService) {}

	canActivate() {
		return this.loginService.isUserLoggedIn;
	}
}
