import { Component, OnInit, OnDestroy } from '@angular/core';
import { InspectionService } from '../../services/inspection.service';
import  InspectionModel from '../../model/inspection.model';
import { ModalService } from '../../services/modal.service';
import { ModalType } from '../../enums/modal-type.enum';

@Component({
  selector: 'inspections',
  templateUrl: './inspections.component.html'
})
export class InspectionsComponent implements OnInit, OnDestroy {
  rows: InspectionModel[] = [];
  temp: InspectionModel[] = [];

  constructor(private inspectionService: InspectionService,
    private modalService: ModalService) { }

  ngOnInit(): void {
    this.inspectionService.get().subscribe((inspections: InspectionModel[]) => {
      this.rows = inspections;
      this.temp = inspections;
    });
  }

  ngOnDestroy(): void {
    this.inspectionService.get().subscribe().unsubscribe();
  }

  add() {
    this.modalService.get(ModalType.AddInspection);
  }

  edit(inspection: InspectionModel) {
    this.modalService.get(ModalType.EditInspection, inspection);
  }

  remove(id: number) {
    this.inspectionService.remove(id).subscribe();
  }

  search(event) {
    const val = event.target.value.toLowerCase();

    const temp = this.temp.filter(function (insp: InspectionModel) {
      return insp.name.toLowerCase().indexOf(val) !== -1
        || insp.surname.toLowerCase().indexOf(val) !== -1
        || insp.county.toLowerCase().indexOf(val) !== -1
        || insp.address.toLowerCase().indexOf(val) !== -1
        || !val;
    });

    this.rows = temp;
  }
}
