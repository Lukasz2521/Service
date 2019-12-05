import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
  path: '',
  component: EditorsComponent,
  },
  {
    path: 'upcoming',
    component: 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditorsRoutingModule { }

