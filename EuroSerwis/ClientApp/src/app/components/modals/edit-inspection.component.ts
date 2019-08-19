import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
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
    //this.inspection = new InspectionModel();
    this.inspectionForm = new FormGroup({
      Name: new FormControl('', Validators.required),
      Surname: new FormControl('', Validators.required),
      Address: new FormControl('', Validators.required),
      County: new FormControl('', Validators.required),
      Date: new FormControl('', Validators.required),
      Phone: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    if (this.inspectionForm.valid) {
      this.inspectionService.update(this.inspectionForm.value).subscribe();
      this.activeModal.close();
    }
  }

  close() {
    this.activeModal.close();
  }
}
