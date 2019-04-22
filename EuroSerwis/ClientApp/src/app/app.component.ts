import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { InspectionService } from './services/inspection.service';
import { Inspection } from './model/inspection.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  rows: [] = [];

  constructor(private inspectionService: InspectionService) {}

  ngOnInit(): void {
    this.inspectionService.get().subscribe((inspections: []) => {
      this.rows = inspections;
    });
  }

  add() {
    let inspection = new Inspection();

    this.inspectionService.add(inspection).subscribe(null);
  }
}
