import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'pages',
  canActivate: [AuthGuard],
   loadChildren: 'app/pages/pages.module#PagesModule' },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#NgxAuthModule',
  },
  {
    path: '',
    loadChildren: './dashboard/dashboard.module#DashboardModule',
  },
  { path: '**', redirectTo: '' },
];

const config: ExtraOptions = {
  useHash: false,
  enableTracing: false
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
