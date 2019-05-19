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

@NgModule({
  declarations: [
    AppComponent,
    InspectionsComponent,
    LoginComponent,
    AddInspectionComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '', component: InspectionsComponent, pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddInspectionComponent]
})
export class AppModule { }
