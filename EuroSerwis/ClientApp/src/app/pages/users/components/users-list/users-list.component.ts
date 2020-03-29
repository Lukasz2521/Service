import { Observable } from 'rxjs';
import { Component } from '@angular/core';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
})
export class UsersListComponent {
  public user$: Observable<any>;
}
