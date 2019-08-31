import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { first, tap, map } from "rxjs/operators";

import { UserInfoService } from "./user-info.service";
import { UserInfo } from "../models/user-info";
import { PermissionsService } from "./permissions.service";
import { UserStatus } from "../constants/user-status";

@Injectable({
	providedIn: "root"
})
export class LoginService {
	constructor(private permissionsService: PermissionsService, private userInfoService: UserInfoService) { }

	public get isUserLoggedIn(): Observable<boolean> {
		return this.permissionsService.currentUserStatus
			.pipe(
				map((userStatus: UserStatus) => {
					return userStatus === UserStatus.ADMIN || userStatus === UserStatus.USER;
				})
			);
	}

	public login(username: string, password: string): Observable<any> {
		return this._signIn(username, password)
			.pipe(
				first(),
				tap((result) => {
					const { success, admin, userInfo } = result;

					if (success) {
						this.permissionsService.setCurrentUserStatus(admin ? UserStatus.ADMIN : UserStatus.USER);
						this.userInfoService.setUserInfo(userInfo);
					}
				})
			);
	}

	public logout(): void {
		this.permissionsService.setCurrentUserStatus(UserStatus.NONE);
	}

	private _signIn(username: string, password: string): Observable<any> {
		if (username === "admin" && password === "admin") {
			const userInfo = new UserInfo();
			userInfo.firstname = "admin";
			userInfo.lastname = "admin";
			userInfo.email = "admin@email.com";

			return of({ success: true, admin: true, userInfo });
		}
		if (username === "user" && password === "user") {
			const userInfo = new UserInfo();
			userInfo.firstname = "user";
			userInfo.lastname = "user";
			userInfo.email = "user@email.com";

			return of({ success: true, admin: false, userInfo });
		}
		return of({ success: false });
	}
}
