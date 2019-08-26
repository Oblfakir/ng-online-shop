import { Injectable, TemplateRef } from "@angular/core";
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
	providedIn: "root"
})
export class ModalService {
	private _modalContent: BehaviorSubject<TemplateRef<any>>;

	constructor() {
		this._modalContent = new BehaviorSubject<TemplateRef<any>>(null);
	}

	public get modalContent(): Observable<TemplateRef<any>> {
		return this._modalContent.asObservable();
	}

	public showModalWindow(modalContent: TemplateRef<any>): void {
		this._modalContent.next(modalContent);
	}

	public hideModalWindow(): void {
		this._modalContent.next(null);
	}
}
