import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { ToastsContainerComponent } from './components/toasts-container/toasts-container.component';
import { ToastComponent } from './components/toast/toast.component'
import { ToastService } from './toast.service';

@NgModule({
  declarations: [
    ToastsContainerComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ToastService
  ],
  exports: [
    ToastsContainerComponent
  ],
  entryComponents: [
    ToastComponent
  ]
})
export class ToastModule { }
