import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import InspectionModel from '../../model/inspection.model';
import { InspectionsState } from '../../state/inspections.reducers';
import { selectAllInspections } from '../..';
import { LoadInspections } from '../../state/inspections.actions';
import { InspectionType } from '../../enums/inspection-type.enum';

@Component({
  selector: 'undone-inspections',
  templateUrl: './undone-inspections.component.html',
  styleUrls: ['./undone-inspections.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UndoneInspectionsComponent implements OnInit {
  public inspections$: Observable<InspectionModel[]>;

  constructor(
    private store: Store<InspectionsState>) {
    this.inspections$ = store.pipe(
      select(selectAllInspections)
    );
  }

  ngOnInit(): void {
    this.store.dispatch(new LoadInspections({ type: InspectionType.UNDONE }));
  }
}
