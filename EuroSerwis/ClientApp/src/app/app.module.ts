import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InspectionsComponent } from './pages/inspections/inspections.component';
import { LoginComponent } from './pages/login/login.component';
import { AddInspectionComponent } from './components/modals/add-inspection.component';
import { EditInspectionComponent } from './components/modals/edit-inspection.component';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    InspectionsComponent,
    LoginComponent,
    AddInspectionComponent,
    EditInspectionComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    NgbModule,
    RouterModule.forRoot([
      { canActivate: [AuthGuard], path: '', component: InspectionsComponent, pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    AddInspectionComponent,
    EditInspectionComponent
  ]
})
export class AppModule { }
