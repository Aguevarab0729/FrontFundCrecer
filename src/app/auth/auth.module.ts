import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartLoginComponent } from './start-login/start-login.component';
import { HomeComponent } from '../components/navigation/home/home.component';
import { BlankLayoutComponent } from './blank-layout/blank-layout.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: StartLoginComponent,
  ...canActivate(() => redirectUnauthorizedTo(['login'])) },
  { path: 'home', component: HomeComponent,
  ...canActivate(() => redirectUnauthorizedTo(['login']))},
  { path: '**', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [
    BlankLayoutComponent
  ]
})
export class AuthRoutingModule { }
