import { Injectable, TemplateRef } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import Toast from './components/model/toast';

@Injectable({ providedIn: 'root' })
export class ToastService {
  private _toast: Subject<Toast> = new Subject<Toast>(); // replace any with model 
  public readonly toast: Observable<Toast> = this._toast.asObservable();

  show(toast: Toast) {
    this._toast.next(toast);
  }

  remove(toast) {
    //this.toasts = this.toasts.filter(t => t !== toast);
  }
}
