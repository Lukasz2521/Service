import { Component, TemplateRef, Input } from '@angular/core';
import { ToastService } from './../toast.service';


@Component({
  selector: 'toast',
  templateUrl: './toast.component.html',
  host: { '[class.ngb-toasts]': 'true' }
})
export class ToastComponent {
  @Input('class')
  class: string;

  @Input('header')
  header: string;

  @Input('delay')
  delay: string;

  constructor(public toastService: ToastService) { }

  isTemplate(toast) { return toast.textOrTpl instanceof TemplateRef; }
}
