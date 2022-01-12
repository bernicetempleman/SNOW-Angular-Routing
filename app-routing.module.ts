import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NewComponentComponent } from './new-component/new-component.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { StruDireComponent } from './stru-dire/stru-dire.component';
import { AppComponent } from './app.component';
import { AttDireComponent } from './att-dire/att-dire.component';
import { CustomDireComponent } from './custom-dire/custom-dire.component';
import { DataBindingOneComponent } from './data-binding-one/data-binding-one.component';
import { DataBindingTwoComponent } from './data-binding-two/data-binding-two.component';
import { ServiceDemoComponent } from './service-demo/service-demo.component';
import { HttpClientComponent } from './http-client/http-client.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { CreateStudentComponent } from './create-student/create-student.component';

const routes: Routes = [
  // {path:'myComponent', component:AppComponent},
  {path:'myComponent', component:NewComponentComponent},
  
  {path:'StrDirectives', component:StruDireComponent},
  {path:'AttDirectives', component:AttDireComponent},
  {path:'CustomDirectives', component:CustomDireComponent,canActivate:[AuthGuard]},
  {path:'Pipes', component:PipesDemoComponent},
  {path:'DataBindingOne', component:DataBindingOneComponent},
  {path:'DataBindingTwo', component:DataBindingTwoComponent},
  {path:'Services', component:ServiceDemoComponent},
  {path:'HttpClient', component:HttpClientComponent},
  {path:'CreateStudent', component:CreateStudentComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthService]
})
export class AppRoutingModule { }
