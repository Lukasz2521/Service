import { NgModule } from '@angular/core';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './containers/users.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

@NgModule({
    declarations: [UsersComponent, UserDetailsComponent, UsersListComponent],
    imports: [UsersRoutingModule],
})
export class UsersModule {}