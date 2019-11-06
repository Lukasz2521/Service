import { Component, OnInit } from '@angular/core';
import Toast from '../model/toast';


@Component({
  selector: 'toast',
  templateUrl: './toast.component.html',
  host: { '[class.ngb-toasts]': 'true' }
})
export class ToastComponent implements OnInit {
  toast: Toast;

  constructor() { }

  ngOnInit() {
    
  }

  hideToast(): void {
    //setTimeout(() => {
    //}, this.toast.delay);
  }
}
