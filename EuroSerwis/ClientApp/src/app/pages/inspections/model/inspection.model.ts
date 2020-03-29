import { NgbDate } from "@ng-bootstrap/ng-bootstrap";

export default interface InspectionModel {
  id: number;
  name: string;
  surname: string;
  address: string;
  county: string;
  date: string | Date | NgbDate;
  phone: string;
}