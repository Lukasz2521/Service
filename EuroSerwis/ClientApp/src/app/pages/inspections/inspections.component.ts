import { Component, OnInit, OnDestroy } from '@angular/core';
import { InspectionService } from '../../services/inspection.service';
import { Inspection } from '../../model/inspection.model';
import { ModalService } from '../../services/modal.service';
import { ModalType } from '../../enums/modal-type.enum';

@Component({
  selector: 'inspections',
  templateUrl: './inspections.component.html'
})
export class InspectionsComponent implements OnInit, OnDestroy {
  rows: Inspection[] = [];
  temp: Inspection[] = [];

  constructor(private inspectionService: InspectionService, private modalService: ModalService) { }

  ngOnInit(): void {
    this.inspectionService.get().subscribe((inspections: Inspection[]) => {
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

  onAdd(event) {
    console.log(event);
  }

  remove() {

  }

  search(event) {
    const val = event.target.value.toLowerCase();

    const temp = this.temp.filter(function (insp: Inspection) {
      return insp.name.toLowerCase().indexOf(val) !== -1
        || insp.surname.toLowerCase().indexOf(val) !== -1
        || insp.county.toLowerCase().indexOf(val) !== -1
        || insp.address.toLowerCase().indexOf(val) !== -1
        || !val;
    });

    this.rows = temp;
  }
}
