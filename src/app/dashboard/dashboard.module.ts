import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { FrontPageComponent } from './front-page/front-page.component';
import { DashboardComponent } from './dashboard.component';
import { ThemeModule } from '../@theme/theme.module';
import { SewaComponent } from './sewa/sewa.component';
import { BookingComponent } from './booking/booking.component';
import { GalleryComponent } from './gallery/gallery.component';
import { UserInformationComponent } from './booking/user-information/user-information.component';
import { DateDoctorComponent } from './booking/date-doctor/date-doctor.component';
import { ConfirmationComponent } from './booking/confirmation/confirmation.component';
import { NgxAuthModule } from '../auth/auth.module';
import { NbCalendarModule } from '@nebular/theme';
import { AmazingTimePickerModule } from 'amazing-time-picker';
//import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [FrontPageComponent, DashboardComponent, SewaComponent, BookingComponent, GalleryComponent, UserInformationComponent, DateDoctorComponent, ConfirmationComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ThemeModule,
    NgxAuthModule,
    NbCalendarModule,
    AmazingTimePickerModule
    // AgmCoreModule.forRoot({
    //   apiKey: ''
    // })
  ]
})
export class DashboardModule { }
