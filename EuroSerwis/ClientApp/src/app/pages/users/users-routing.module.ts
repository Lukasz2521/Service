import { UserDetailsComponent } from './components/user-details/user-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersComponent } from './containers/users.component';

const routes: Routes = [
    {
        path: '',
        component: UsersComponent,
        children: [
            {
                path: '',
                component: UsersListComponent
            },
            {
                path: ':id',
                component: UserDetailsComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UsersRoutingModule { }