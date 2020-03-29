import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import InspectionModel from '../../model/inspection.model';
import { InspectionsState } from '../../state/inspections.reducers';
import { selectAllInspections } from '../..';
import { LoadInspections } from '../../state/inspections.actions';

@Component({
  selector: 'all-inspections',
  templateUrl: './all-inspections.component.html',
  styleUrls: ['./all-inspections.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AllInspectionsComponent implements OnInit {
  inspections$: Observable<InspectionModel[]>;

  constructor(
    private store: Store<InspectionsState>) {
    this.inspections$ = store.pipe(
      select(selectAllInspections)
    );
  }

  ngOnInit(): void {
    this.store.dispatch(new LoadInspections());
  }
}
