import { NgModule  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SideBarComponent } from './components/navigation/side-bar/side-bar.component';
import { MainViewComponent } from './components/pages/main-view/main-view.component';
import { TableComponent } from './components/navigation/table/table.component';
import { StartLoginComponent } from './auth/start-login/start-login.component';
import { ModalWindowComponent } from './components/navigation/modal-window/modal-window.component';
import { ImportComponent } from './components/navigation/import/import.component';
import { ChartsComponent } from './components/navigation/charts/charts.component';
import { ExportComponent } from './components/navigation/export/export.component';
import { MarketComponent } from './components/navigation/market/market.component';
import { HomeComponent } from './components/navigation/home/home.component';
import { HeadmenuComponent } from './components/navigation/headmenu/headmenu.component';
import { FormModule } from './form/form.module';

/*Fire Base*/
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { ModalMarketComponent } from './components/modals/modal-market/modal-market.component';



@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    MainViewComponent,
    TableComponent,
    StartLoginComponent,
    ModalWindowComponent,
    ImportComponent,
    ChartsComponent,
    ExportComponent,
    MarketComponent,
    HomeComponent,
    HeadmenuComponent,
    ModalMarketComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormModule,
    
    NgbModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
