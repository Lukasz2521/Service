import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import { map, mergeMap, catchError, exhaustMap } from 'rxjs/operators';
import { InspectionService } from '../services/inspection.service';
import {
  LoadInspections, InspectionActionTypes,
  InspectionsLoaded, InspectionCreated, InspectionDeleted, InspectionUpdated
} from '../state/inspections.actions';
import { EMPTY } from 'rxjs';
import InspectionModel from '../model/inspection.model';

@Injectable({ providedIn: 'root' })
export class InspectionsEffects {

  @Effect()
  loadInspections$ = this.actions$.pipe(
    ofType(InspectionActionTypes.LoadInspections),
    mergeMap(() => this.inspectionsService.get()
      .pipe(
        map((inspections :InspectionModel[]) => new InspectionsLoaded(inspections)),
        catchError(() => EMPTY)
      )
    )
  );

  @Effect()
  createInspection$ = this.actions$.pipe(
    ofType(InspectionActionTypes.CreateInspection),
    mergeMap((inspection: InspectionModel) => this.inspectionsService.add(inspection)
      .pipe(
        map((inspection: InspectionModel) => new InspectionCreated(inspection)),
        catchError(() => EMPTY)
      )
    )
  );

  @Effect()
  deleteInspection$ = this.actions$.pipe(
    ofType(InspectionActionTypes.DeleteInspection),
    mergeMap((inspectionId: number) => this.inspectionsService.remove(inspectionId)
      .pipe(
        map((inspection: InspectionModel) => new InspectionDeleted(inspection)),
        catchError(() => EMPTY)
      )
    )
  );

  @Effect()
  editInspection = this.actions$.pipe(
    ofType(InspectionActionTypes.UpdateInspection),
    mergeMap((inspection: InspectionModel) => this.inspectionsService.update(inspection)
      .pipe(
        map((inspection: InspectionModel) => new InspectionUpdated(inspection)),
        catchError(() => EMPTY)
      )
    )
  );

  constructor(
    private actions$: Actions,
    private inspectionsService: InspectionService
  ) { }
}
