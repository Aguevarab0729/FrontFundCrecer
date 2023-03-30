import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AssistanceComponent } from './assistance/assistance.component';
import { BenficiariesInscriptionComponent } from './benficiaries-inscription/benficiaries-inscription.component';
import { BirthInformationComponent } from './birth-information/birth-information.component';
import { DisabilityInformationComponent } from './disability-information/disability-information.component';
import { GuardianInformationComponent } from './guardian-information/guardian-information.component';
import { HealthInformationComponent } from './health-information/health-information.component';
import { ParentInformationComponent } from './parent-information/parent-information.component';
import { ResidencyInformationComponent } from './residency-information/residency-information.component';
import { SocialInformationComponent } from './social-information/social-information.component';
import { BasicInformationComponent } from './basic-information/basic-information.component';
import { ModalFormsComponent } from './modal-forms/modal-forms.component';

const routes: Routes = [
  { path: 'assistance', component: AssistanceComponent },
  { path: 'benficiaries-inscription', component: BenficiariesInscriptionComponent },
  { path: 'birth-information', component: BirthInformationComponent },
  { path: 'disability-information', component: DisabilityInformationComponent },
  { path: 'guardian-information', component: GuardianInformationComponent },
  { path: 'health-information', component: HealthInformationComponent },
  { path: 'parent-information', component: ParentInformationComponent },
  { path: 'residency-information', component: ResidencyInformationComponent },
  { path: 'social-information', component: SocialInformationComponent },
  { path: 'basic-information', component: BasicInformationComponent },
  { path: 'modal-forms', component: ModalFormsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
