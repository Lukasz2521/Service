import { NgModule } from '@angular/core';
import { ToastsContainerComponent } from './components/toasts-container/toasts-container.component';
import { ToastComponent } from './components/toast/toast.component'
import { ToastService } from './toast.service';

@NgModule({
  declarations: [
    ToastsContainerComponent,
    ToastComponent
  ],
  providers: [
    ToastService
  ],
  exports: [
    ToastsContainerComponent
  ]
})
export class ToastModule { }
