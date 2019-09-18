import * as fromInspections from './state/inspections.reducers';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

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
)
