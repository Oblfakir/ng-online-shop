import { Injectable } from '@angular/core';
import { PermissionsService } from './permissions.service';
import { UserStatus } from '../constants/user-status';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class LoginService {
	constructor(private permissionsService: PermissionsService, private http: HttpClient) { }

	public get isUserLoggedIn(): boolean {
		const userStatus = this.permissionsService.currentUserStatus;
		return userStatus === UserStatus.ADMIN || userStatus === UserStatus.USER;
	}

	public login(): void {}

	public logout(): void {}
}
