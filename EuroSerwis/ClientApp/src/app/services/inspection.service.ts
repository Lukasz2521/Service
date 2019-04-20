import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inspection } from '../model/inspection.model';

@Injectable({
  providedIn: 'root',
})
export class InspectionService {

  constructor(private http: HttpClient) { }

  public get() {
    console.log('service');

    return this.http.get('https://localhost:44325/' + 'api/Inspection/Get');
  }

  public add(inspection: Inspection) {
    return this.http.post('https://localhost:44325/' + 'api/Inspection/Add', inspection);
  }
}
