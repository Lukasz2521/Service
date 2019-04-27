import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { InspectionService } from '../../services/inspection.service';
import { Inspection } from '../../model/inspection.model';

@Component({
  selector: 'inspections',
  templateUrl: './inspections.component.html',
  styleUrls: []
})
export class InspectionsComponent implements OnInit {
  rows: [] = [];

  constructor(private inspectionService: InspectionService) { }

  ngOnInit(): void {
    this.inspectionService.get().subscribe((inspections: []) => {
      this.rows = inspections;
    });
  }

  add() {

    //this.inspectionService.add(inspection).subscribe(null);
  }
}
