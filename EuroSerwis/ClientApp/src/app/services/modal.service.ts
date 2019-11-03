import { Injectable } from '@angular/core';
import { ModalType } from '../enums/modal-type.enum';
import { NgbModal NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import InspectionModel from '../model/inspection.model';
import { AddInspectionComponent } from '../components/modals/add-inspection.component';
import { EditInspectionComponent } from '../components/modals/edit-inspection.component';

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
        (modal.componentInstance as EditInspectionComponent).inspectionForm.setValue({
          id: model.id,
          name: model.name,
          surname: model.surname,
          address: model.address,
          county: model.county,
          date: model.date,
          phone: model.phone
        });
        break;
      }
    }
  }
}



