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
    let modal;
    
    switch (modalType) {
      case ModalType.AddInspection: {
        modal = this.modalService.open(AddInspectionComponent);
        (modal.componentInstance as AddInspectionComponent).inspection = new InspectionModel();
        break;
      }
      case ModalType.EditInspection: {
        modal = this.modalService.open(EditInspectionComponent);
        (modal.componentInstance as EditInspectionComponent).inspection = model;
        break;
      }
    }
  }
}


interface ICar {
  name: string,
  year: number
}

class Car {
  name: string;
  year: number;

  constructor(name: string, year: number) {
    this.name = name;
    this.year = year;
  }
}

let cars: ICar[] = [
  { name: 'Ford', year: 2001 },
  new Car('Nissan', 2010),
  new Car('Nissan', 2019)
]



