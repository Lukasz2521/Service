import { NgModule } from '@angular/core';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './containers/users.component';

@NgModule({
    declarations: [UsersComponent],
    imports: [UsersRoutingModule],
})
export class UsersModule {}