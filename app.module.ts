import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { LifecycleCompComponent } from './lifecycle-comp/lifecycle-comp.component';
import { StruDireComponent } from './stru-dire/stru-dire.component';
import { AttDireComponent } from './att-dire/att-dire.component';
import { TextDirective } from './text.directive';
import { CustomDireComponent } from './custom-dire/custom-dire.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { WordcountPipe } from './wordcount.pipe';
import { DataBindingOneComponent } from './data-binding-one/data-binding-one.component';
import { DataBindingTwoComponent } from './data-binding-two/data-binding-two.component';
import { FormsModule } from '@angular/forms';
import { ServiceDemoComponent } from './service-demo/service-demo.component';
import { HttpClientComponent } from './http-client/http-client.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateStudentComponent } from './create-student/create-student.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent,
    LifecycleCompComponent,
    StruDireComponent,
    AttDireComponent,
    TextDirective,
    CustomDireComponent,
    PipesDemoComponent,
    WordcountPipe,
    DataBindingOneComponent,
    DataBindingTwoComponent,
    ServiceDemoComponent,
    HttpClientComponent,
    CreateStudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
