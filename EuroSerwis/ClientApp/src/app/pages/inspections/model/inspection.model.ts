import { NgbDate } from "@ng-bootstrap/ng-bootstrap";

export default class InspectionModel {
  public id: number;
  public name: string;
  public surname: string;
  public address: string;
  public county: string;
  public date: string | Date | NgbDate;
  public phone: string;
}
