import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

//  Interface de form health
import { Health } from 'src/app/interfaces/form/health';

import { createValidator } from '../../validators/validator-creator';
import { required } from '../../validators/validators';

@Component({
  selector: 'app-health-information',
  templateUrl: './health-information.component.html',
  styleUrls: ['./health-information.component.scss']
})
export class HealthInformationComponent {

  healthInformationForm = this.formBuilder.group({
    regime: [''],
    eps: [''],
    hasVaccinationCard: [''],
    vaccinationVerificationDate: [''],
    vaccinationCardUpToDate: [''],
    hasGrowthAndDevelopmentCard: [''],
    growthDevelopmentControlsReceived: [''],
    prematurenessBackground: [''],
    under40Weeks: [''],
    cefalicProfile: [''],
    gestationalAgeAtBirth: [''],
    weightAtBirth: [''],
    heightAtBirth: [''],
    exclusivelyBreastfeeding: [''],
    exclusiveBreastfeedingDuration: [''],
    totalBreastfeedingDuration: [''],
    gestationWeeks: [''],
    ticketNumber: ['']
  });

  formValidator = createValidator<Health>(this.healthInformationForm, {
    regime: [ required() ],
    eps: [ required() ],
    hasVaccinationCard: [ required() ],
    vaccinationVerificationDate: [ required() ],
    vaccinationCardUpToDate: [ required() ],
    hasGrowthAndDevelopmentCard: [ required() ],
    growthDevelopmentControlsReceived: [ required() ],
    prematurenessBackground: [ required() ],
    under40Weeks: [ required() ],
    cefalicProfile: [ required() ],
    gestationalAgeAtBirth: [ required() ],
    weightAtBirth: [ required() ],
    heightAtBirth: [ required() ],
    exclusivelyBreastfeeding: [ required() ],
    exclusiveBreastfeedingDuration: [ required() ],
    totalBreastfeedingDuration: [ required() ],
    gestationWeeks: [ required() ],
    ticketNumber: [ required() ]
  });

  constructor(private formBuilder: FormBuilder){};

  onSubmit = () => {
    console.warn(this.healthInformationForm.value);
  }

}
