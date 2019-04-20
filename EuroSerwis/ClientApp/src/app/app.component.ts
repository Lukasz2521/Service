import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { InspectionService } from './services/inspection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private inspectionService: InspectionService) {}

  ngOnInit(): void {
    this.inspectionService.get().subscribe(null);
  }

  rows = [
    { name: 'Austin', surname: 'Male', address: 'Swimlane', clas: 'ddd', date: 'ssss', phone: 'www' }
  ];

  add() {

  }
}
