import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { MedicalProfileComponent } from './medical-profile/medical-profile.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'medical-profile',
    component: MedicalProfileComponent,
  }, 
  {
    path: '',
    redirectTo: 'medical-profile',
    pathMatch: 'full',
  }, {
    path: '**',
    component: NotFoundComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
