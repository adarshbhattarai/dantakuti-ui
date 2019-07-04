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
import { NbTokenService } from '@nebular/auth/services/token/token.service';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(private analytics: AnalyticsService,
     private menuService: NbMenuService, 
       private authService: NbAuthService,
       private router: Router,
       private tokenService: NbTokenService) {
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
       this.tokenService.clear();
       this.router.navigateByUrl('/auth/login');
    }
  }
}
