import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full'},
  { path: 'sign-in', loadChildren: 'app/pages/sign-in/sign-in.module#SignInModule' },
  { path: 'sign-up', loadChildren: 'app/pages/sign-up/sign-up.module#SignUpModule' },
  { path: 'forgot-password', loadChildren: 'app/pages/forgot-password/forgot-password.module#ForgotPasswordModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
