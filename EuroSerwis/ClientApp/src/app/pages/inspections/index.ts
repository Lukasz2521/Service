import * as fromInspections from './state/inspections.reducers';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import InspectionModel from './model/inspection.model';

export interface AppState {
  inspections: fromInspections.InspectionsState
}

export const reducers: ActionReducerMap<AppState> = {
  inspections: fromInspections.inspectionsReducer
}

export const selectInspectionState
  = createFeatureSelector<fromInspections.InspectionsState>('inspections');

export const selectAllInspections = createSelector(
  selectInspectionState,
  fromInspections.selectAllInspections
);

export const selectUpcomingInspections = createSelector(
  selectInspectionState,
  (state: fromInspections.InspectionsState) => {
    let upcomingInspections: Array<InspectionModel> = [];

    for (var inspection in state.entities) {
      if (isUpcomingInspection(state.entities[inspection])) {
        upcomingInspections.push(state.entities[inspection]);
      }
    }

    return upcomingInspections;
  }
);

const isUpcomingInspection = (inspection: InspectionModel) => {
      const inspectionDate = new Date(inspection.date as string), now = new Date();
      const differenceInTime = inspectionDate.getTime() - now.getTime();
      const differenceInDays = differenceInTime / (1000 * 3600 * 24)

      return differenceInDays >= 0 && differenceInDays <= 7;
}
