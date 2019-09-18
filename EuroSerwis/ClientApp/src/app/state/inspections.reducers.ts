import InspectionModel from "../model/inspection.model";
import { InspectionActionTypes } from "./inspections.actions";
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';


export interface InspectionsState extends EntityState<InspectionModel> {
  inspections: InspectionModel[];
}

export const adapter: EntityAdapter<InspectionModel> = createEntityAdapter<InspectionModel>();

export const initialState: InspectionsState = adapter.getInitialState({
  inspections: []
});

export function inspectionsReducer(state = initialState, action): InspectionsState {
  switch (action.type) {
    case InspectionActionTypes.InspectionLoaded:
      return adapter.addMany(action.payload, state);
    case InspectionActionTypes.InspectionCreated:
      return adapter.addOne(action.payload, state);
    case InspectionActionTypes.InspectionUpdated:
      return adapter.updateOne(action.payload, state);
    case InspectionActionTypes.InspectionDeleted:
      return adapter.removeOne(action.payload, state);
    default:
      return state;
  }
}

const { selectIds, selectEntities, selectAll } = adapter.getSelectors();

export const selectInspectionIds = selectIds;
export const selectInspectionsEntities = selectEntities;
export const selectAllInspections = selectAll;
