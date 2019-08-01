import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import InspectionModel  from '../model/inspection.model';

@Injectable({
  providedIn: 'root',
})
export class InspectionService {

  constructor(private http: HttpClient) { }

  public get(): Observable<InspectionModel[]> {
    return this.http.get<InspectionModel[]>('https://localhost:44325/' + 'api/Inspection/Get');
  }

  public add(inspection: InspectionModel) {
    return this.http.post('https://localhost:44325/' + 'api/Inspection/Add', inspection);
  }
}
