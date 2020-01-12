import { Component, OnInit } from '@angular/core';
import { InspectionService } from '../../services/inspection.service';
import { Observable } from 'rxjs';
import InspectionModel from '../../model/inspection.model';
import { Store, select } from '@ngrx/store';
import { InspectionsState } from '../../state/inspections.reducers';
import { LoadInspections } from '../../state/inspections.actions';
import { selectUpcomingInspections } from '../..';

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
    this.inspections$ = store.pipe(
      select(selectUpcomingInspections),
    )
  }

  ngOnInit(): void {
    this.store.dispatch(new LoadInspections());
  }
}
