import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    NgxDatatableModule,
    NgbModule,
    //RouterModule.forRoot([
    //  //{ path: '', component: HomeComponent, pathMatch: 'full' },
    //  //{ path: 'counter', component: CounterComponent },
    //])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
