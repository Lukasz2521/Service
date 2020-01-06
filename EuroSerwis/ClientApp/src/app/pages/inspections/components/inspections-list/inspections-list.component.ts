import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import InspectionModel from '../../../../model/inspection.model';
import { ModalService } from '../../../../shared/services/modal.service';
import { ModalType } from '../../../../shared/enums/modal-type.enum';
import { Store, select } from '@ngrx/store';
import { InspectionsState } from '../../../../state/inspections.reducers';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoadInspections, DeleteInspection } from '../../../../state/inspections.actions';
import { selectAllInspections } from '../../../../';
import { ColumnMode, SortType } from '@swimlane/ngx-datatable';
import { InspectionService } from '../../../../services/inspection.service';

@Component({
  selector: 'inspections-list',
  templateUrl: './inspections-list.component.html',
  styleUrls: ['./inspections-list.component.css']
})
export class InspectionsListComponent implements OnInit {
  @Input() inspections$: Observable<InspectionModel[]>;
  tempInspections$: Observable<InspectionModel[]>;
  ColumnMode = ColumnMode;
  SortType = SortType;

  constructor(
    private modalService: ModalService,
    private inspectionService: InspectionService,
    private store: Store<InspectionsState>
  ) {
    //this.inspections$ = store.pipe(
    //  select(selectAllInspections)
    //);
    //this.tempInspections$ = this.inspections$;
  }

  ngOnInit(): void {
    // this.getInspections();
    //this.inspections$ = this.inspectionService.get();
    this.tempInspections$ = this.inspections$;
  }

  getInspections() {
    this.store.dispatch(new LoadInspections());
  }

  add() {
    this.modalService.get(ModalType.AddInspection);
  }

  edit(inspection: InspectionModel) {
    this.modalService.get(ModalType.EditInspection, inspection);
  }

  remove(id: number) {
    this.store.dispatch(new DeleteInspection(id));
  }

  search(event) {
    const val = event.target.value.toLowerCase();

    const tempInspections$ = this.tempInspections$.pipe<InspectionModel[]>(
      map((inspections: InspectionModel[]) =>
        inspections.filter((insp: InspectionModel) =>
          insp.name.toLowerCase().indexOf(val) !== -1
          || insp.surname.toLowerCase().indexOf(val) !== -1
          || insp.county.toLowerCase().indexOf(val) !== -1
          || insp.address.toLowerCase().indexOf(val) !== -1
          || !val
        ))
    );

    this.inspections$ = tempInspections$;
  }
}
