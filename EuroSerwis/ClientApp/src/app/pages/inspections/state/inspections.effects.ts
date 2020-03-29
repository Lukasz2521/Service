import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { InspectionService, InspectionGetQuery } from '../services/inspection.service';
import {
  LoadInspections, InspectionActionTypes,
  InspectionsLoaded, InspectionCreated, InspectionDeleted, InspectionUpdated
} from './inspections.actions';
import { EMPTY } from 'rxjs';
import InspectionModel from '../model/inspection.model';

@Injectable({ providedIn: 'root' })
export class InspectionsEffects {

  @Effect()
  loadInspections$ = this.actions$.pipe(
    ofType(InspectionActionTypes.LoadInspections),
    mergeMap(({ payload }) => this.inspectionsService.get(payload)
      .pipe(
        map((inspections :InspectionModel[]) => new InspectionsLoaded(inspections)),
        catchError(() => EMPTY)
      )
    )
  );

  @Effect()
  createInspection$ = this.actions$.pipe(
    ofType(InspectionActionTypes.CreateInspection),
    mergeMap(({ payload }) => this.inspectionsService.add(payload)
      .pipe(
        map(() => new LoadInspections()),
        catchError(() => EMPTY)
      )
    )
  );

  @Effect()
  deleteInspection$ = this.actions$.pipe(
    ofType(InspectionActionTypes.DeleteInspection),
    mergeMap(({ payload }) => this.inspectionsService.remove(payload)
      .pipe(
        map(() => new InspectionDeleted(payload)),
        catchError(() => EMPTY)
      )
    )
  );

  @Effect()
  updateInspection$ = this.actions$.pipe(
    ofType(InspectionActionTypes.UpdateInspection),
    mergeMap(({ payload }) => this.inspectionsService.update(payload)
      .pipe(
        map(() => new InspectionUpdated(payload)),
        catchError(() => EMPTY)
      )
    )
  );

  constructor(
    private actions$: Actions,
    private inspectionsService: InspectionService
  ) { }
}
