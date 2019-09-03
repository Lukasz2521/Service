import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import  InspectionModel  from '../model/inspection.model';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  isLoggedIn = false;
  redirectUrl: string;

  logIn(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap((val) => this.isLoggedIn = true)
    );
  }

  logOut() {
    this.isLoggedIn = false;
  }
}
