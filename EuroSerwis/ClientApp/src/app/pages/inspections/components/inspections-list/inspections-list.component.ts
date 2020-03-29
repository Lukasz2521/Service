import { ConfirmInspectionComponent } from './../modals/confirm-inspection/confirm-inspection.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import InspectionModel from '../../model/inspection.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ColumnMode, SortType } from '@swimlane/ngx-datatable';
import { EditInspectionComponent } from '../modals/edit-inspection.component';
import { AddInspectionComponent } from '../modals/add-inspection.component';
import { RemoveInspectionComponent } from '../modals/remove-inspection/remove-inspection.component';

@Component({
  selector: 'inspections-list',
  templateUrl: './inspections-list.component.html',
  styleUrls: ['./inspections-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InspectionsListComponent implements OnInit {
  @Input() public inspections$: Observable<InspectionModel[]>;
  public tempInspections$: Observable<InspectionModel[]>;
  public ColumnMode = ColumnMode;
  public SortType = SortType;

  constructor(private modalService: NgbModal) {}

  public ngOnInit(): void {
    this.tempInspections$ = this.inspections$;
  }

  public add(): void {
   this.modalService.open(AddInspectionComponent);
  }

  public edit(inspection: InspectionModel): void {
    const modal = this.modalService.open(EditInspectionComponent);
    inspection.date = new Date(inspection.date as string);
    (modal.componentInstance as EditInspectionComponent).inspectionForm.setValue({ ...inspection });
  }

  public remove(id: number): void {
    this.modalService.open(RemoveInspectionComponent);
  }

  public confirmInspection(): void {
    this.modalService.open(ConfirmInspectionComponent);
  }

  public search(event): void {
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
