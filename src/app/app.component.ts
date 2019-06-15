/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { NbMenuService } from '@nebular/theme';
import {  NbAuthService } from '@nebular/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(private analytics: AnalyticsService,
     private menuService: NbMenuService, 
       private authService: NbAuthService,
       private router: Router) {
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();

    this.menuService.onItemClick()
    .subscribe((event) => {
      this.onContextItemSelection(event.item.title);
    });
  }
  onContextItemSelection(title) {
    if(title === 'Logout'){
        localStorage.removeItem('auth_app_token');
       this.router.navigateByUrl('/auth/login');
    }
  }
}
