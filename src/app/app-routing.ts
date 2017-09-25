import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "./api/guard/auth.guard";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', loadChildren: 'app/pages/home/home.module#HomeModule', canActivate: [AuthGuard] },
  { path: 'sign-in', loadChildren: 'app/pages/sign-in/sign-in.module#SignInModule' },
  { path: 'sign-up', loadChildren: 'app/pages/sign-up/sign-up.module#SignUpModule' },
  { path: 'forgot-password', loadChildren: 'app/pages/forgot-password/forgot-password.module#ForgotPasswordModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
