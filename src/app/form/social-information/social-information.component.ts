import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

//   interface form social

import { Social } from 'src/app/interfaces/form/social';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { FormService } from '../form.service';


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

  constructor(private formBuilder: FormBuilder, private formService: FormService , private localStorageService: LocalstorageService){
    const socialInformation = this.localStorageService.getItem('socialInformation');
  
  // Verificar si existe un valor en el local storage y llenar el formulario
    if (socialInformation) {
      this.socialInformationForm.patchValue(socialInformation);
    }
  }

  onSubmit = () => {
    const socialInformation = this.socialInformationForm.value;
    this.localStorageService.setItem('socialInformation',socialInformation);
    this.formService.addProperty('socialInformation',this.localStorageService.getItem('socialInformation'));
  }

}

