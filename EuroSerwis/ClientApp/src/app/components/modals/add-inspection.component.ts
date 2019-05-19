import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Inspection } from '../../model/inspection.model';
import { InspectionService } from '../../services/inspection.service';

@Component({
  selector: 'add-inspection-component',
  templateUrl: './add-inspection.component.html'
})
export class AddInspectionComponent implements OnInit {
  inspectionForm: FormGroup;
  get f() { return this.inspectionForm.controls; }

  constructor(public activeModal: NgbActiveModal, private inspectionService: InspectionService) { }

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
      this.inspectionService.add(this.inspectionForm.value);
      this.activeModal.close();
    }
  }
}
