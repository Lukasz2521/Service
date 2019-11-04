import { Component, TemplateRef } from '@angular/core';
import { ToastService } from './../../toast.service';


@Component({
  selector: 'toasts',
  templateUrl: './toasts-container.component.html',
  host: { '[class.ngb-toasts]': 'true' },
  styles: [`.toasts-container {
    position: fixed;
    top: 50px;
    right: 50px;
    z-index: 1200;
  }`]
})
export class ToastsContainerComponent {
  constructor(public toastService: ToastService) { }

  isTemplate(toast) { return toast.textOrTpl instanceof TemplateRef; }
}
