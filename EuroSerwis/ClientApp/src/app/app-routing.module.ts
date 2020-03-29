import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
    {
        /*canActivate: [AuthGuard], */
        path: 'inspections',
        loadChildren: './pages/inspections/inspection.module#InspectionModule',
    },
    {
        path: 'users',
        loadChildren: './pages/users/users.module#UsersModule',
    },
    // {
    //     path: '',
    //     redirectTo: 'inspections',
    //     pathMatch: 'full',
    // },
    {
        path: 'login',
        component: LoginComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
