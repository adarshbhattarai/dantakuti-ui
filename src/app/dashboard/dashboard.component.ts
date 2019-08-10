import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-dashboard',
  template: `
  <nb-layout>
  <nb-layout-header fixed>
  <div class="logo-container">
    <nb-action><h2><img id = "picture" [src]="'./../favicon.png'" style= "width:50px; height:50px"/> Danta-<span>kuti</span></h2></nb-action>
  </div>
    <nb-actions class="left">
      <nb-action>Booking</nb-action>
      <nb-action>Gallery</nb-action>
      <nb-action><a routerLink='/auth'>Login</a></nb-action>
    </nb-actions>
  </nb-layout-header>
  <nb-layout-column style= "padding-top: 10px">
    <router-outlet></router-outlet>
  </nb-layout-column>
  <nb-layout-footer fixed>
  <ngx-footer></ngx-footer>
  </nb-layout-footer>
  </nb-layout>`,
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

    
  lat = 51.678418;
  lng = 7.809007;

  ngOnInit() {
  }

}
