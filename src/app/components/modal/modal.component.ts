import { Component, TemplateRef, OnInit, OnDestroy, ViewChild, ElementRef } from "@angular/core";
import { ModalService } from 'src/app/services/modal.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
	selector: "app-modal",
	templateUrl: "./modal.component.html",
	styleUrls: ["./modal.component.scss"]
})
export class ModalComponent implements OnInit, OnDestroy {
    @ViewChild('modalContainer') modalContainerRef: ElementRef;
	public modalContent: TemplateRef<any>;
	private _unsubscribe: Subject<boolean> = new Subject<boolean>();

	constructor(private modalService: ModalService) {}

	ngOnInit(): void {
		this.modalService.modalContent
			.pipe(takeUntil(this._unsubscribe))
			.subscribe((content: TemplateRef<any>) => {
                this.modalContent = content;
			});
    }
    
    public backgroundClickHandler(event: Event): void {
        if (this.modalContainerRef.nativeElement === event.target) {
            this.modalService.hideModalWindow();
        }
    }

	ngOnDestroy(): void {
		this._unsubscribe.next(true);
	}
}
