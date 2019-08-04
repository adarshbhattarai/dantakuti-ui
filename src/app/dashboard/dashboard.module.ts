import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { FrontPageComponent } from './front-page/front-page.component';
import { DashboardComponent } from './dashboard.component';
import { NbLayoutModule ,NbContextMenuModule,NbActionsModule} from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
//import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [FrontPageComponent, DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NbLayoutModule,
    NbContextMenuModule,
    NbActionsModule,
    ThemeModule,
    // AgmCoreModule.forRoot({
    //   apiKey: ''
    // })
  ]
})
export class DashboardModule { }
