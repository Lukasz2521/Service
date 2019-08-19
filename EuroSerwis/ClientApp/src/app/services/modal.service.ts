import { Injectable } from '@angular/core';
import { ModalType } from '../enums/modal-type.enum';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import InspectionModel from '../model/inspection.model';
import { AddInspectionComponent } from '../components/modals/add-inspection.component';
import { EditInspectionComponent } from '../components/modals/edit-inspection.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {

  constructor(private modalService: NgbModal) { }

  public get(modalType: ModalType, model: any = null) {
    switch (modalType) {
      case ModalType.AddInspection:
        //this.open(AddInspectionComponent, model);
        break;
      case ModalType.EditInspection:
        let inspection: InspectionModel = new InspectionModel();
        inspection.Name = model.name;
        inspection.Surname = model.surname;
        inspection.Address = model.address;
        inspection.County = model.county;
        inspection.Phone = model.phone;
        inspection.Date = model.date;
        let modal = this.modalService.open(EditInspectionComponent);
        (modal.componentInstance as EditInspectionComponent).inspection = inspection;
        break;
    }
  }
}
