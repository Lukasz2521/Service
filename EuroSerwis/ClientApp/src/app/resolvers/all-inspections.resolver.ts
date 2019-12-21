import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import InspectionModel from '../model/inspection.model';
import { InspectionService } from '../services/inspection.service';

@Injectable()
export class AllInspectionResolve implements Resolve<InspectionModel[]> {
  constructor(private inspectionService: InspectionService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.inspectionService.get();
  }
}
