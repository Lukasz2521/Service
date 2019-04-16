import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { InspectionService } from './services/inspection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor(private inspectionService: InspectionService) {

    }

    ngOnInit(): void {
      this.inspectionService.get();
    }

    title = 'app';
    rows = [
      { name: 'Austin', gender: 'Male', company: 'Swimlane' },
      { name: 'Dany', gender: 'Male', company: 'KFC' },
      { name: 'Molly', gender: 'Female', company: 'Burger King' },
    ];
    columns = [
      { prop: 'Imię' },
      { name: 'Nazwisko' },
      { name: 'Adres' },
      { name: 'clas' },
      { name: 'Data przeglądu' },
      { name: 'Numer kontaktowy' }
    ];

    add() {

    }
}
