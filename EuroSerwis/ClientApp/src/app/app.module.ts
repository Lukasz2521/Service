import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbModule, NgbDateAdapter, NgbDateNativeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { InspectionsComponent } from './pages/inspections/inspections.component';
import { LoginComponent } from './pages/login/login.component';
import { AddInspectionComponent } from './components/modals/add-inspection.component';
import { EditInspectionComponent } from './components/modals/edit-inspection.component';
import { AuthGuard } from './guards/auth.guard';
import { StoreModule } from '@ngrx/store';
import { reducers } from './index';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { InspectionsEffects } from './state/inspections.effects';

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
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([
      InspectionsEffects
    ]),
    RouterModule.forRoot([
      { /*canActivate: [AuthGuard],*/ path: '', component: InspectionsComponent, pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
    ]),
  ],
  providers: [{
    provide: NgbDateAdapter,
    useClass: NgbDateNativeAdapter
  }],
  bootstrap: [AppComponent],
  entryComponents: [
    AddInspectionComponent,
    EditInspectionComponent
  ]
})
export class AppModule { }
