import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import InspectionModel  from '../model/inspection.model';
import { environment } from '../../../../environments/environment';
import resource from '../resources';
import { InspectionType } from '../enums/inspection-type.enum';

export interface InspectionGetQuery {
  type?: InspectionType;
  id?: string;
}

@Injectable({
  providedIn: 'root',
})
export class InspectionService {

  constructor(private http: HttpClient) { }

  public get(queryParams?: InspectionGetQuery): Observable<InspectionModel[]> {
    const params = new HttpParams({ fromObject: { ...queryParams }});

    // return this.http.get<InspectionModel[]>(
    //   `${environment.host + resource.inspection}`, { params: params }
    // );

    return of<InspectionModel[]>([
      {
        id: 2,
        name: 'Lukasz',
        surname: 'Radecki',
        address: 'Ciechanów',
        county: 'Ciechanowski',
        date: new Date(),
        phone: '54654654'
      }
    ]);
  }

  public add(inspection: InspectionModel): Observable<InspectionModel> {
    return this.http.post<InspectionModel>(`${environment.host + resource.inspection}`, inspection);
  }

  public update(inspection: InspectionModel): Observable<InspectionModel> {
    return this.http.put<InspectionModel>(`${environment.host + resource.inspection}`, inspection);
  }

  public remove(id: number): Observable<InspectionModel> {
    return this.http.delete<InspectionModel>(`${environment.host + resource.inspection}/${id}`);
  }
}
