import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import InspectionModel  from '../model/inspection.model';
import { environment } from '../../environments/environment';
import resource from '../../environments/resources';

@Injectable({
  providedIn: 'root',
})
export class InspectionService {

  constructor(private http: HttpClient) { }

  public get(): Observable<InspectionModel[]> {
    return this.http.get<InspectionModel[]>(`${environment.host + resource.inspection}`);
  }

  public add(inspection: InspectionModel) {
    return this.http.post(`${environment.host + resource.inspection}`, inspection);
  }

  public update(inspection: InspectionModel) {
    return this.http.put<InspectionModel>(`${environment.host + resource.inspection}`, inspection);
  }

  public remove(id: number) {
    return this.http.delete<InspectionModel>(`${environment.host + resource.inspection}/${id}`);
  }
}
