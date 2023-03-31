import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

//   interface form social

import { Social } from 'src/app/interfaces/form/social';


import { createValidator, maxLength, required } from '../validators';

@Component({
  selector: 'app-social-information',
  templateUrl: './social-information.component.html',
  styleUrls: ['./social-information.component.scss']
})
export class SocialInformationComponent {

  socialInformationForm = this.formBuilder.group({
    groupEthnicity: [''],
    beneficiarySisbenized: [''],
    sisbenScore: [''],
    belongsToFamiliesInAction: [''],
    directlyAffectedByArmedConflict: [''],
    focusingCriteria: [''],
    justificationDocumentExists: ['']
  });

  formValidator = createValidator<Social>(this.socialInformationForm, {
    groupEthnicity: [ required() ],
    beneficiarySisbenized: [ required() ],
    sisbenScore: [ required(), maxLength(3) ],
    belongsToFamiliesInAction: [ required() ],
    directlyAffectedByArmedConflict: [ required() ],
    focusingCriteria: [ required() ],
    justificationDocumentExists: [ required() ]
  })

  constructor(private formBuilder: FormBuilder){};

  onSubmit = () => {
    console.warn(this.socialInformationForm.value);
  }

}

