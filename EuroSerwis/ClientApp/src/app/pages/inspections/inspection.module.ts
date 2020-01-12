import { InspectionService } from './services/inspection.service';
import { EditInspectionComponent } from './components/modals/edit-inspection.component';
import { AddInspectionComponent } from './components/modals/add-inspection.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbModule, NgbDateAdapter, NgbDateNativeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { InspectionsComponent } from './inspections.component';

import { StoreModule } from '@ngrx/store';
import { reducers } from './index';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { InspectionsEffects } from './state/inspections.effects';
import { ToastModule } from '../../toast/toast.module';
//import { NotificationInterceptor } from '../../../interceptors/notification.interceptor';

import { InspectionRoutingModule } from './inspection-routing.module';
import { InspectionsListComponent } from './components/inspections-list/inspections-list.component';
import { CommonModule } from '@angular/common';
import { UpcomingInspectionsComponent } from './components/upcoming-inspections/upcoming-inspections.component';
import { AllInspectionsComponent } from './components/all-inspections/all-inspections.component';
import { ModalService } from './services/modal.service';

@NgModule({
  declarations: [
    InspectionsComponent,
    AddInspectionComponent,
    EditInspectionComponent,
    InspectionsListComponent,
    UpcomingInspectionsComponent,
    AllInspectionsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    NgbModule,
    StoreModule.forRoot(reducers),
    InspectionRoutingModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([
      InspectionsEffects
    ]),
  ],
  providers: [
    ModalService,
    InspectionService,
  ],
  entryComponents: [
    AddInspectionComponent,
    EditInspectionComponent
  ]
})
export class InspectionModule { }
