import { MarketComponent } from './components/navigation/market/market.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/navigation/home/home.component';
import { ChartsComponent } from './components/navigation/charts/charts.component';
import { ExportComponent } from './components/navigation/export/export.component';
import { ImportComponent } from './components/navigation/import/import.component';
import { TableComponent } from './components/navigation/table/table.component';
import { StartLoginComponent } from './components/pages/start-login/start-login.component';



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'main', component: TableComponent},
  { path: 'login', component: StartLoginComponent},
  { path: 'import', component: ImportComponent},
  { path: 'export', component: ExportComponent},
  { path: 'charts', component: ChartsComponent},
  { path: 'market', component: MarketComponent},
  { path: '**', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
