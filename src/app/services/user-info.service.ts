import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserInfo } from '../models/user-info';

@Injectable({
	providedIn: 'root'
})
export class UserInfoService {
	private _userInfo: BehaviorSubject<UserInfo>;

	constructor() {
		this._userInfo = new BehaviorSubject<UserInfo>(null);
	}
}
