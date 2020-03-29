import { Action } from "@ngrx/store";
import InspectionModel from "../model/inspection.model";
import { InspectionGetQuery } from "../services/inspection.service";

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

  constructor(private payload?: InspectionGetQuery) {}
}

export class InspectionsLoaded implements Action {
  readonly type = InspectionActionTypes.InspectionLoaded;

  constructor(private payload: InspectionModel[]) { }
}

export class CreateInspection implements Action {
  readonly type = InspectionActionTypes.CreateInspection;

  constructor(public payload: InspectionModel) { }
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
  readonly type = InspectionActionTypes.InspectionDeleted;

  constructor(private payload: number) { }
}

export class UpdateInspection implements Action {
  readonly type = InspectionActionTypes.UpdateInspection;

  constructor(public payload: InspectionModel) { }
}

export class InspectionUpdated implements Action {
  readonly type = InspectionActionTypes.InspectionUpdated;

  constructor(public payload: InspectionModel) { }
}

export type InspectionsActions = LoadInspections |
  CreateInspection | DeleteInspection | UpdateInspection | InspectionUpdated;
