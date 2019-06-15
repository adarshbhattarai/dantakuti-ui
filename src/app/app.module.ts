/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NbPasswordAuthStrategy, NbAuthModule,NbAuthJWTToken, NbOAuth2AuthStrategy,NbOAuth2ResponseType } from '@nebular/auth';
import { AuthGuard } from './auth.guard';
import { fakeBackendProvider } from './_helpers/fake_backend';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,

    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          baseEndpoint: 'auth',
          login: {
            endpoint: '/login',
          },
          token: {
            class: NbAuthJWTToken,
            key:'token'
          }
        }),
        NbOAuth2AuthStrategy.setup({
          name: 'google',
          clientId: '802148822982-3fvjk6bvr3bk4lmp4rin04fvfc8u6j2n.apps.googleusercontent.com',
          clientSecret: '',
          authorize: {
            endpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
            responseType: NbOAuth2ResponseType.TOKEN,
            scope: 'https://www.googleapis.com/auth/userinfo.profile',
          },
        }),
      ],
      forms: {},
    }), 
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    AuthGuard,
    fakeBackendProvider
  ],
})
export class AppModule {
}
