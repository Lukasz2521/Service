import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { InspectionService } from '../../services/inspection.service';
import { Inspection } from '../../model/inspection.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'inspections',
  templateUrl: './inspections.component.html',
  styleUrls: []
})
export class InspectionsComponent implements OnInit {
  rows: Inspection[] = [];
  temp: Inspection[] = [];
  inspectionForm = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    county: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required)
  });

  constructor(private inspectionService: InspectionService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.inspectionService.get().subscribe((inspections: []) => {
      this.rows = inspections;
      this.temp = inspections;
    });

  }

  add(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {

    }, (reason) => {
 
    });
    //this.inspectionService.add(inspection).subscribe(null);
  }

  onSubmit() {
    console.log(this.inspectionForm.value);
  }

  search(event) {
    const val = event.target.value.toLowerCase();

    const temp = this.temp.filter(function (insp: Inspection) {
      return insp.name.toLowerCase().indexOf(val) !== -1
        || insp.surname.toLowerCase().indexOf(val) !== -1
        || insp.county.toLowerCase().indexOf(val) !== -1
        || insp.address.toLowerCase().indexOf(val) !== -1
        || !val;
    });

    this.rows = temp;
  }
}
