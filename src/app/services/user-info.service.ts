import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { UserInfo } from "../models/user-info";

@Injectable({
	providedIn: "root"
})
export class UserInfoService {
	private _userInfo: BehaviorSubject<UserInfo>;

	constructor() {
		this._userInfo = new BehaviorSubject<UserInfo>(null);
	}

	public setUserInfo(userInfo: UserInfo): void {
		this._userInfo.next(userInfo);
	}

	public get userInfo(): Observable<UserInfo> {
		return this._userInfo.asObservable();
	}
}
