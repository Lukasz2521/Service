import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbModule, NgbDateAdapter, NgbDateNativeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { InspectionsComponent } from './inspections.component';
import { AddInspectionComponent } from '../../components/modals/add-inspection.component';
import { EditInspectionComponent } from '../../components/modals/edit-inspection.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../index';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { InspectionsEffects } from '../../state/inspections.effects';
import { ToastModule } from '../../toast/toast.module';
import { NotificationInterceptor } from '../../interceptors/notification.interceptor';
import { EditorsRoutingModule } from './inspection-routing.module';

@NgModule({
  declarations: [
    InspectionsComponent,
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
    ToastModule,
    StoreModule.forRoot(reducers),
    EditorsRoutingModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([
      InspectionsEffects
    ]),
  ],
  providers: [
    {
      provide: NgbDateAdapter,
      useClass: NgbDateNativeAdapter
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NotificationInterceptor,
      multi: true
    }
  ],
  entryComponents: [
    AddInspectionComponent,
    EditInspectionComponent
  ]
})
export class InspectionModule { }
