import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InspectionsListComponent } from './components/inspections-list/inspections-list.component';
import { InspectionsComponent } from './inspections.component';
import { AllInspectionsComponent } from './components/all-inspections/all-inspections.component';
import { UpcomingInspectionsComponent } from './components/upcoming-inspections/upcoming-inspections.component';
import { AllInspectionResolve } from '../../resolvers/all-inspections.resolver';
import { UpcomingInspectionResolve } from '../../resolvers/upcoming-inspections.resolver';


const routes: Routes = [
  {
    path: '',
    component: InspectionsComponent, 
    children: [
      {
        path: '',
        component: AllInspectionsComponent,
       // resolve: { inspections: AllInspectionResolve }
      },
      {
        path: 'upcoming',
        component: UpcomingInspectionsComponent,
        //resolve: { inspections: UpcomingInspectionResolve }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InspectionRoutingModule { }

