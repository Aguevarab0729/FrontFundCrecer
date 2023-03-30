import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BirthInformationComponent } from './birth-information/birth-information.component';
import { DisabilityInformationComponent } from './disability-information/disability-information.component';
import { GuardianInformationComponent } from './guardian-information/guardian-information.component';
import { HealthInformationComponent } from './health-information/health-information.component';
import { ParentInformationComponent } from './parent-information/parent-information.component';
import { ResidencyInformationComponent } from './residency-information/residency-information.component';
import { SocialInformationComponent } from './social-information/social-information.component';
import { BasicInformationComponent } from './basic-information/basic-information.component';
import { ModalFormsComponent } from './modal-forms/modal-forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AssistanceComponent } from './assistance/assistance.component';
import { FormRoutingModule } from './form-routing.module';
import { ErrorsPipe } from '../pipes/errors.pipe';


@NgModule({
  declarations: [
    AssistanceComponent,
    BirthInformationComponent,
    DisabilityInformationComponent,
    GuardianInformationComponent,
    HealthInformationComponent,
    ParentInformationComponent,
    ResidencyInformationComponent,
    SocialInformationComponent,
    BasicInformationComponent,
    ModalFormsComponent,
    ErrorsPipe
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    FormRoutingModule
  ]
})
export class FormModule { }
