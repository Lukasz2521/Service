import { selectAllInspections } from './../../state/inspections.reducers';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import InspectionModel from '../../model/inspection.model';
import { Store, select } from '@ngrx/store';
import { InspectionsState } from '../../state/inspections.reducers';
import { LoadInspections } from '../../state/inspections.actions';
import { InspectionType } from '../../enums/inspection-type.enum';

@Component({
  selector: 'upcoming-inspections',
  templateUrl: './upcoming-inspections.component.html',
  styleUrls: ['./upcoming-inspections.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpcomingInspectionsComponent implements OnInit {
  public inspections$: Observable<InspectionModel[]>;

  constructor(
    private store: Store<InspectionsState>) {
    this.inspections$ = store.pipe(
      select(selectAllInspections),
    )
  }

  ngOnInit(): void {
    this.store.dispatch(new LoadInspections({ type: InspectionType.UPCOMING }));
  }
}
