import { Injectable } from '@angular/core';
import { ModalType } from '../enums/modal-type.enum';
import { NgbModal, NgbModalRef, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import InspectionModel from '../../model/inspection.model';
import { AddInspectionComponent } from '../../pages/inspections/components/modals/add-inspection.component-inspection.component';
import { EditInspectionComponent } from '../../pages/inspections/components/modals/edit-inspection.component-inspection.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {

  constructor(private modalService: NgbModal) { }

  get(modalType: ModalType, model: InspectionModel = null) {
    let modal: NgbModalRef;

    switch (modalType) {
      case ModalType.AddInspection: {
        modal = this.modalService.open(AddInspectionComponent);
        break;
      }
      case ModalType.EditInspection: {
        modal = this.modalService.open(EditInspectionComponent);
        model.date = new Date(model.date as string);
        (modal.componentInstance as EditInspectionComponent).inspectionForm.setValue({ ...model });
        break;
      }
    }
  }
}



