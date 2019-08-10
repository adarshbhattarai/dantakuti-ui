import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { FrontPageComponent } from './front-page/front-page.component';
import { DashboardComponent } from './dashboard.component';
import { ThemeModule } from '../@theme/theme.module';
import { SewaComponent } from './sewa/sewa.component';
//import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [FrontPageComponent, DashboardComponent, SewaComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ThemeModule
    // AgmCoreModule.forRoot({
    //   apiKey: ''
    // })
  ]
})
export class DashboardModule { }
