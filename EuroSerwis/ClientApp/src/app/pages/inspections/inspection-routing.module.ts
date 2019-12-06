import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InspectionsListComponent } from './components/inspectionsList/inspections-list.component';
import { InspectionsComponent } from './inspections.component';


const routes: Routes = [
  {
    path: '',
    component: InspectionsComponent,
    children: [
      {
        path: '',
        component: InspectionsListComponent,
      },
      {
        path: 'upcoming',
        component: InspectionsListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InspectionRoutingModule { }

