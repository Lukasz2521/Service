import { Component, OnInit, OnDestroy } from '@angular/core';
import { InspectionService } from '../../services/inspection.service';
import  InspectionModel from '../../model/inspection.model';
import { ModalService } from '../../services/modal.service';
import { ModalType } from '../../enums/modal-type.enum';
import { Store, select } from '@ngrx/store';
import { InspectionsState } from '../../state/inspections.reducers';
import { Observable } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { LoadInspections, DeleteInspection } from '../../state/inspections.actions';
import { selectAllInspections } from '../..';


@Component({
  selector: 'inspections',
  templateUrl: './inspections.component.html'
})
export class InspectionsComponent implements OnInit {
  inspections$: Observable<InspectionModel[]>;
  tempInspections$: Observable<InspectionModel[]>;

  constructor(
    private inspectionService: InspectionService,
    private modalService: ModalService,
    private store: Store<InspectionsState>
  ) {
    this.inspections$ = store.pipe(
      select(selectAllInspections)
    );
  }

  ngOnInit(): void {
    this.getInspections();
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

    const tempInspections$ = this.inspections$.pipe<InspectionModel[]>(
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
