import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PermissionsService } from 'src/app/services/permissions.service';

@Injectable({
	providedIn: 'root'
})
export class AddProductGuard implements CanActivate {
	constructor(private permissionsService: PermissionsService) {}

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		return this.permissionsService.checkRouteAccess(state.url.replace('/', ''));
	}
}
