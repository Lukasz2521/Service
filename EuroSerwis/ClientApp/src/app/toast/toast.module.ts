import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { ToastsContainerComponent } from './components/toasts-container/toasts-container.component';
import { ToastComponent } from './components/toast/toast.component'
import { ToastService } from './toast.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NotificationInterceptor } from './interceptors/notification.interceptor';

@NgModule({
  declarations: [
    ToastsContainerComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ToastService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NotificationInterceptor,
      multi: true
    }
  ],
  exports: [
    ToastsContainerComponent
  ],
  entryComponents: [
    ToastComponent
  ]
})
export class ToastModule { }
