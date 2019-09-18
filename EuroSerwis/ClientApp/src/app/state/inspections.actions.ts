import { Action } from "@ngrx/store";
import InspectionModel from "../model/inspection.model";

export enum InspectionActionTypes {
  LoadInspections = 'Load inspections',
  InspectionLoaded = 'Inspection Loaded',
  CreateInspection = 'Create inspection',
  InspectionCreated = 'Inspection created',
  DeleteInspection = 'Delete Inspection',
  InspectionDeleted = 'Inspection deleted',
  UpdateInspection = 'Udpate Inspection',
  InspectionUpdated = 'InspectionUpdated'
}

export class LoadInspections implements Action {
  readonly type = InspectionActionTypes.LoadInspections;
}

export class InspectionsLoaded implements Action {
  readonly type = InspectionActionTypes.InspectionLoaded;

  constructor(private payload: InspectionModel[]) { }
}

export class CreateInspection implements Action {
  readonly type = InspectionActionTypes.CreateInspection;
}

export class InspectionCreated implements Action {
  readonly type = InspectionActionTypes.InspectionCreated;

  constructor(private payload: InspectionModel) { }
}

export class DeleteInspection implements Action {
  readonly type = InspectionActionTypes.DeleteInspection;

  constructor(private payload: number) { }
}

export class InspectionDeleted implements Action {
  readonly type = InspectionActionTypes.DeleteInspection;

  constructor(private payload: InspectionModel) { }
}

export class UpdateInspection implements Action {
  readonly type = InspectionActionTypes.UpdateInspection;

  constructor(private payload: InspectionModel) { }
}

export class InspectionUpdated implements Action {
  readonly type = InspectionActionTypes.InspectionUpdated;

  constructor(private payload: InspectionModel) { }
}

export type InspectionsActions = LoadInspections | CreateInspection | DeleteInspection | UpdateInspection;
