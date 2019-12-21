import { Component, OnInit } from '@angular/core';
import { InspectionService } from '../../../../services/inspection.service';
import { Observable } from 'rxjs';
import InspectionModel from '../../../../model/inspection.model';
import { Store, select } from '@ngrx/store';
import { InspectionsState } from '../../../../state/inspections.reducers';
import { LoadInspections } from '../../../../state/inspections.actions';
import { selectAllInspections, selectUpcomingInspections } from '../../../../';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'upcoming-inspections',
    templateUrl: './upcoming-inspections.component.html',
    styleUrls: ['./upcoming-inspections.component.css']
})
export class UpcomingInspectionsComponent implements OnInit {
  inspections$: Observable<InspectionModel[]>;

  constructor(
    private inspectionService: InspectionService,
    private store: Store<InspectionsState>) {
    //this.inspections$ = this.inspectionService.getUpcoming();
    this.inspections$ = store.pipe(
      select(selectUpcomingInspections),
    )
  }

  ngOnInit(): void {
    this.store.dispatch(new LoadInspections());
  }

  isUpcomingInspection(inspection: InspectionModel): boolean {
    const inspectionDate = inspection.date as Date, now = new Date();
    const differenceInDays = (inspectionDate.getTime() - now.getTime()) / (100 * 3600 * 24);

    return differenceInDays >= 0 && differenceInDays <= 7; 
  }
}
