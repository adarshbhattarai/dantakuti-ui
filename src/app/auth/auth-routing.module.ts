import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NbAuthComponent } from '@nebular/auth';  
import { LoginComponent } from './login/login.component' 
import { RegisterComponent } from './register/register.component';
import { RequestPasswordComponent } from './request-password/request-password.component';

export const routes: Routes = [
    {
        path: '',
        component: NbAuthComponent,  
        children: [
          {
            path: '',
            component: LoginComponent,
          },
          {
            path: 'login',
            component: LoginComponent,
          },{
            path: 'register',
            component: RegisterComponent,
          },
          {
            path: 'request-password',
            component: RequestPasswordComponent,
          },
        ],
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgxAuthRoutingModule{
}