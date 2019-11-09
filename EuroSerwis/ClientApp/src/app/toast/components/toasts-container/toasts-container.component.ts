import {
  Component,
  OnInit, ViewChild, ComponentFactoryResolver, ViewContainerRef
} from '@angular/core';
import { ToastService } from './../../toast.service';
import { ToastComponent } from '../toast/toast.component';
import Toast from '../model/toast';

@Component({
  selector: 'toasts',
  templateUrl: './toasts-container.component.html',
  styles: [`.toasts-container {
    position: fixed;
    top: 30px;
    right: 30px;
    z-index: 1200;
  }`]
})
export class ToastsContainerComponent implements OnInit {
  constructor(public toastService: ToastService,
    private componentFactoryResolver: ComponentFactoryResolver) { }

  @ViewChild('toastContainer', { read: ViewContainerRef })
  toastContainer: ViewContainerRef; 

  ngOnInit() {
    this.toastService.toast.subscribe((toast: Toast) => {
      const factory = this.componentFactoryResolver.resolveComponentFactory(ToastComponent);
      const toastRef = this.toastContainer.createComponent(factory);
      toastRef.instance.toast = toast;
      toastRef.instance.selfRef = toastRef.hostView;
    });
  }
}
