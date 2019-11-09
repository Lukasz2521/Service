import { Component, OnInit, ViewRef, ElementRef } from '@angular/core';
import Toast from '../model/toast';


@Component({
  selector: 'toast',
  templateUrl: './toast.component.html'
})
export class ToastComponent implements OnInit {
  toast: Toast;

  selfRef: ViewRef;

  constructor(private element: ElementRef) { }

  ngOnInit() {
    this.hideToast();
  }

  hideToast(): void {
    setTimeout(() => {
      if (this.selfRef !== undefined) {
        //this.element.nativeElement.classList.remove('show');
        this.selfRef.destroy();
      }
    }, this.toast.delay);
  }
}
