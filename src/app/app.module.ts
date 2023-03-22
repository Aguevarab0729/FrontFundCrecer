import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AssistanceComponent } from './components/form/assistance/assistance.component';
import { BenficiariesInscriptionComponent } from './components/form/benficiaries-inscription/benficiaries-inscription.component';
import { BirthInformationComponent } from './components/form/birth-information/birth-information.component';
import { DisabilityInformationComponent } from './components/form/disability-information/disability-information.component';
import { GuardianInformationComponent } from './components/form/guardian-information/guardian-information.component';
import { HealthInformationComponent } from './components/form/health-information/health-information.component';
import { ParentInformationComponent } from './components/form/parent-information/parent-information.component';
import { ResidencyInformationComponent } from './components/form/residency-information/residency-information.component';
import { SocialInformationComponent } from './components/form/social-information/social-information.component';
import { BasicInformationComponent } from './components/form/basic-information/basic-information.component';

import { SideBarComponent } from './components/navigation/side-bar/side-bar.component';
import { MainViewComponent } from './components/pages/main-view/main-view.component';
import { TableComponent } from './components/navigation/table/table.component';
import { DataComponent } from './components/navigation/data/data.component';
import { StartLoginComponent } from './components/pages/start-login/start-login.component';
import { ModalWindowComponent } from './components/navigation/modal-window/modal-window.component';
import { ImportComponent } from './components/navigation/import/import.component';

@NgModule({
  declarations: [
    AppComponent,
    AssistanceComponent,
    BenficiariesInscriptionComponent,
    BirthInformationComponent,
    DisabilityInformationComponent,
    GuardianInformationComponent,
    HealthInformationComponent,
    ParentInformationComponent,
    ResidencyInformationComponent,
    SocialInformationComponent,
    BasicInformationComponent,
    SideBarComponent,
    MainViewComponent,
    TableComponent,
    DataComponent,
    StartLoginComponent,
    ModalWindowComponent,
    ImportComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
