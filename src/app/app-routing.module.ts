import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './components/navigation/data/data.component';
import { ExportComponent } from './components/navigation/export/export.component';
import { ImportComponent } from './components/navigation/import/import.component';
import { TableComponent } from './components/navigation/table/table.component';
import { StartLoginComponent } from './components/pages/start-login/start-login.component';
import { LoginComponent } from './components/auth/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'main', component: TableComponent},
  { path: 'login', component: LoginComponent},
  { path: 'import', component: ImportComponent},
  { path: 'export', component: ExportComponent},
  { path: 'charts', component: DataComponent},
  { path: '**', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
