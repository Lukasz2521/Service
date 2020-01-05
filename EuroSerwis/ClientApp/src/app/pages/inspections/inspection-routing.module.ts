import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InspectionsComponent } from './inspections.component';
import { AllInspectionsComponent } from './components/all-inspections/all-inspections.component';
import { UpcomingInspectionsComponent } from './components/upcoming-inspections/upcoming-inspections.component';


const routes: Routes = [
  {
    path: '',
    component: InspectionsComponent, 
    children: [
      {
        path: '',
        component: AllInspectionsComponent
      },
      {
        path: 'upcoming',
        component: UpcomingInspectionsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InspectionRoutingModule { }

