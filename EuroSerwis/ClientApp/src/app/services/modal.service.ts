import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inspection } from '../model/inspection.model';
import { ModalType } from '../enums/modal-type.enum';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddInspectionComponent } from '../components/modals/add-inspection.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {

  constructor(private modalService: NgbModal) { }

  public get(modalType: ModalType) {
    switch (modalType) {
      case ModalType.AddInspection:
        this.open(AddInspectionComponent);
        break;
    }
  }

  private open(modal) {
    this.modalService.open(modal)
  }
}
