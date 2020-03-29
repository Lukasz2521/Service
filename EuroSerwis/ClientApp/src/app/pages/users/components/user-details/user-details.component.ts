import { Observable } from 'rxjs';
import { Component } from '@angular/core';

@Component({
  selector: 'user-details',
  templateUrl: './user-details.component.html',
})
export class UserDetailsComponent {
    public user$: Observable<any>;
}
