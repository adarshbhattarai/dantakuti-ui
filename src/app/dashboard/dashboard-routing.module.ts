import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';
import { DashboardComponent } from './dashboard.component';
import { BookingComponent } from './booking/booking.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent, 
    children:[
      {
        path: '',
        component: FrontPageComponent
      },
      {
        path: 'booking',
        component: BookingComponent
      },
      {
        path: 'gallery',
        component: GalleryComponent
      }
    ] 
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
