import { UndoneInspectionsComponent } from './components/undone-inspections/undone-inspections.component';
import { DoneInspectionsComponent } from './components/done-inspections/done-inspections.component';
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
      },
      {
        path: 'done',
        component: DoneInspectionsComponent
      },
      {
        path: 'undone',
        component: UndoneInspectionsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InspectionRoutingModule { }

