import { MarketComponent } from './components/navigation/market/market.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/navigation/home/home.component';
import { ChartsComponent } from './components/navigation/charts/charts.component';
import { ExportComponent } from './components/navigation/export/export.component';
import { ImportComponent } from './components/navigation/import/import.component';
import { TableComponent } from './components/navigation/table/table.component';
import {AuthRoutingModule} from './auth/auth.module';
import { BlankLayoutComponent } from './auth/blank-layout/blank-layout.component';
import { StartLoginComponent } from './auth/start-login/start-login.component';
import { MainViewComponent } from './components/pages/main-view/main-view.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: '',
    component: BlankLayoutComponent,

    children: [
      { path: 'login', component: StartLoginComponent }
    ]
  },
  {
    path: '',
    component: MainViewComponent, // el resto de las rutas usan AppComponent
    children: [
      { path: 'home', component: HomeComponent,
      ...canActivate(() => redirectUnauthorizedTo(['login']))},
      { path: 'main', component: TableComponent,
      ...canActivate(() => redirectUnauthorizedTo(['login']))},
      { path: 'import', component: ImportComponent,
      ...canActivate(() => redirectUnauthorizedTo(['login']))},
      { path: 'export', component: ExportComponent,
      ...canActivate(() => redirectUnauthorizedTo(['login']))},
      { path: 'charts', component: ChartsComponent,
      ...canActivate(() => redirectUnauthorizedTo(['login']))},
      { path: 'market', component: MarketComponent,
      ...canActivate(() => redirectUnauthorizedTo(['login']))},
    ],
    ...canActivate(() => redirectUnauthorizedTo(['login']))
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
