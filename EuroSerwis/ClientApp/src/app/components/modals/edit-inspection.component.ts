import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { InspectionService } from '../../services/inspection.service';
import InspectionModel from '../../model/inspection.model';

@Component({
  selector: 'edit-inspection-component',
  templateUrl: './inspection-modal.component.html'
})
export class EditInspectionComponent implements OnInit {
  inspectionForm: FormGroup;
  inspection: InspectionModel;
  get f() { return this.inspectionForm.controls; }

  constructor(public activeModal: NgbActiveModal,
    private inspectionService: InspectionService) { }

  ngOnInit() {
    this.inspectionForm = new FormGroup({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      county: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    if (this.inspectionForm.valid) {
      this.inspection.date = this.getDate();
      this.inspectionService.update(this.inspection).subscribe();
      this.activeModal.close();
    }
  }

  getDate() {
    const date = this.inspectionForm.value.date as NgbDateStruct;
    return new Date(date.year, date.month - 1, date.day).toJSON();
  }

  close() {
    this.activeModal.close();
  }
}
