import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { InspectionsState } from '../../state/inspections.reducers';
import { Store } from '@ngrx/store';
import { CreateInspection } from '../../state/inspections.actions';

@Component({
  selector: 'add-inspection-component',
  templateUrl: './inspection-modal.component.html'
})
export class AddInspectionComponent {
  title: string = 'Dodaj przegląd';
  inspectionForm: FormGroup;
  get f() { return this.inspectionForm.controls; }

  constructor(
    public activeModal: NgbActiveModal,
    private store: Store<InspectionsState>) {
    this.createForm();
  }

  onSubmit() {
    if (this.inspectionForm.valid) {
      this.store.dispatch(new CreateInspection(this.inspectionForm.value));
      this.close();
    }
  }

  private createForm() {
    this.inspectionForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      county: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+')])
    });
  }

  close() {
    this.activeModal.close();
  }
}
