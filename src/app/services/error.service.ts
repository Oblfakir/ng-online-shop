import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppError } from '../models/error';

@Injectable({
	providedIn: 'root'
})
export class ErrorService {
	private _errors: BehaviorSubject<AppError[]>;

	constructor() {
		this._errors = new BehaviorSubject<AppError[]>([]);
	}

	public get currentErrors(): AppError[] {
		return this._errors.getValue();
	}

	public get errors(): Observable<AppError[]> {
		return this._errors.asObservable();
	}

	public addError(error: AppError): void {
		this._errors.next([...this._errors.getValue(), error]);
	}

	public deleteErrors(): void {
		this._errors.next([]);
	}
}
