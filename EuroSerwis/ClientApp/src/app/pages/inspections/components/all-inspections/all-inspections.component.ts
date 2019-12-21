import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { InspectionService } from '../../../../services/inspection.service';
import { Observable } from 'rxjs';
import InspectionModel from '../../../../model/inspection.model';
import { ActivatedRoute } from '@angular/router';
import { InspectionsState } from '../../../../state/inspections.reducers';
import { selectAllInspections } from '../../../../';
import { LoadInspections, DeleteInspection } from '../../../../state/inspections.actions';


@Component({
    selector: 'all-inspections',
    templateUrl: './all-inspections.component.html',
    styleUrls: ['./all-inspections.component.css']
})
export class AllInspectionsComponent implements OnInit {

  inspections$: Observable<InspectionModel[]>;
  constructor(
    private route: ActivatedRoute,
    private inspectionService: InspectionService,
    private store: Store<InspectionsState>) {
    this.inspections$ = store.pipe(
      select(selectAllInspections)
    );
  }

  ngOnInit(): void {
    this.store.dispatch(new LoadInspections());
  } 
}
