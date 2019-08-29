import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserStatus } from '../constants/user-status';
import { AppRoutes } from '../constants/routes';
import { ErrorService } from './error.service';
import { LoginService } from './login.service';

@Injectable({
	providedIn: 'root'
})
export class PermissionsService {
	private _currentUserStatus: BehaviorSubject<UserStatus>;

	constructor(private errorService: ErrorService) {
		this._currentUserStatus = new BehaviorSubject<UserStatus>(UserStatus.NONE);
	}

	public get currentUserStatus(): Observable<UserStatus> {
		return this._currentUserStatus.asObservable();
	}

	public setCurrentUserStatus(status: UserStatus): void {
		this._currentUserStatus.next(status);
    }

	public checkRouteAccess(route: string): boolean {
		switch (route) {
			case AppRoutes.ADD_PRODUCT: {
				return this._isUserAdmin();
			}
			case AppRoutes.ERROR.ROOT: {
				return this.errorService.currentErrors.length > 0;
			}
            case AppRoutes.USER_PAGE:
            case AppRoutes.CHECKOUT: {
				return this._isUserLoggedIn();
            }
            case AppRoutes.PDP:
			case AppRoutes.PRODUCT_LIST: {
				return true;
            }
			default: {
				return false;
			}
		}
    }
    
    private _isUserAdmin(): boolean {
        return this._currentUserStatus.getValue() === UserStatus.ADMIN;
    }

    private _isUserLoggedIn(): boolean {
        return this._currentUserStatus.getValue() !== UserStatus.NONE;
    }
}
