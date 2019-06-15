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
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth' },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
