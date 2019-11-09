import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { InspectionsState } from '../../state/inspections.reducers';
import { Store } from '@ngrx/store';
import { UpdateInspection } from '../../state/inspections.actions';
import { ToastService } from '../../toast/toast.service';

@Component({
  selector: 'edit-inspection-component',
  templateUrl: './inspection-modal.component.html'
})
export class EditInspectionComponent {
  title: string = 'Edytuj przegląd';
  inspectionForm: FormGroup;
  get f() { return this.inspectionForm.controls; }

  constructor(public activeModal: NgbActiveModal,
    private store: Store<InspectionsState>,
    private toastService: ToastService) {
    this.createForm();
  }

  onSubmit() {
    if (this.inspectionForm.valid) {
      this.store.dispatch(new UpdateInspection(this.inspectionForm.value));
      this.close();
      this.toastService.show({ text: 'Przegląd zmieniony', delay: 5000, class: 'bg-success' });
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
      phone: new FormControl('', Validators.required)
    });
  }

  close() {
    this.inspectionForm.reset();
    this.activeModal.close();
  }
}
