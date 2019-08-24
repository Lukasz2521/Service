import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import InspectionModel  from '../../model/inspection.model';
import { InspectionService } from '../../services/inspection.service';
import { NgbDateStruct  } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'add-inspection-component',
  templateUrl: './inspection-modal.component.html'
})
export class AddInspectionComponent implements OnInit {
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
      this.inspectionForm.value.date = this.getDate();
      this.inspectionService.add(this.inspectionForm.value).subscribe();
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
