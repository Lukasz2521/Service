import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbModule, NgbDateAdapter, NgbDateNativeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './core/guards/auth.guard';
import { StoreModule } from '@ngrx/store';
import { reducers } from './index';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { InspectionsEffects } from './state/inspections.effects';
import { ToastModule } from './toast/toast.module';
import { NotificationInterceptor } from './interceptors/notification.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
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
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([
      InspectionsEffects
    ]),
    RouterModule.forRoot([
      {
        /*canActivate: [AuthGuard], */
        path: 'inspections',
        loadChildren: './pages/inspections/inspection.module#InspectionModule',
      },
      {
        path: '',
        redirectTo: 'inspections',
        pathMatch: 'full',
      },
      { path: 'login', component: LoginComponent },
    ]),
  ],
  providers: [
    {
      provide: NgbDateAdapter,
      useClass: NgbDateNativeAdapter
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
