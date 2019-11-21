import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { ToastService } from '../toast/toast.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  DELETE = 'DELETE',
  PUT = 'PUT'
}

@Injectable()
export class NotificationInterceptor implements HttpInterceptor {

  constructor(private toastService: ToastService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          if (event.status === 200) {
            if (request.method === HttpMethod.POST) {
              this.toastService.show({ text: 'Przegląd dodany', delay: 5000, class: 'bg-success' });
            } else if (request.method === HttpMethod.PUT) {
              this.toastService.show({ text: 'Przegląd zmieniony', delay: 5000, class: 'bg-success' });
            } else if (request.method === HttpMethod.DELETE) {
              this.toastService.show({ text: 'Przegląd usunięty', delay: 5000, class: 'bg-danger' });
            }
          } else {
              this.toastService.show({ text: 'Coś poszło nie tak. Spróbuj jeszcze raz', delay: 5000, class: 'bg-warning' });
          }
        }
      })
    );
  }
}
