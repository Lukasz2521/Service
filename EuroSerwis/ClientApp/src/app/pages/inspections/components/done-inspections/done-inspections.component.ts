import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import InspectionModel from '../../model/inspection.model';;
import { InspectionsState } from '../../state/inspections.reducers';
import { selectAllInspections } from '../..';
import { LoadInspections } from '../../state/inspections.actions';
import { InspectionType } from '../../enums/inspection-type.enum';

@Component({
  selector: 'done-inspections',
  templateUrl: './done-inspections.component.html',
  styleUrls: ['./done-inspections.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DoneInspectionsComponent implements OnInit {
  public inspections$: Observable<InspectionModel[]>;

  constructor(
    private store: Store<InspectionsState>) {
    this.inspections$ = store.pipe(
      select(selectAllInspections)
    );
  }

  ngOnInit(): void {
    this.store.dispatch(new LoadInspections({ type: InspectionType.DONE }));
  }
}
