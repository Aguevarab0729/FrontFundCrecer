import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

//  interface residency form
import { Residency } from 'src/app/interfaces/form/residency';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { FormService } from '../form.service';

import { createValidator, minLength, required } from '../validators';

@Component({
  selector: 'app-residency-information',
  templateUrl: './residency-information.component.html',
  styleUrls: ['./residency-information.component.scss']
})
export class ResidencyInformationComponent {

  residencyInformationForm = this.formBuilder.group({
    countryOfResidence: [''],
    residenceDepartment: [''],
    locationZone: [''],
    headerType: [''],
    localityName: [''],
    neighborhood: [''],
    foreignZoneName: [''],
    address: [''],
    primaryPhone: [''],
    secondaryPhone: [''],
    householdStratum: ['']
  });

  formValidator = createValidator<Residency>(this.residencyInformationForm, {
    countryOfResidence: [ required() ],
    residenceDepartment: [ required() ],
    locationZone: [ required() ],
    headerType: [ required() ],
    localityName: [ required() ],
    neighborhood: [ required() ],
    foreignZoneName: [ required() ],
    address: [ required(), minLength(10) ],
    primaryPhone: [ required() ],
    secondaryPhone: [ required() ],
    householdStratum: [ required() ]
  })

  constructor(private formBuilder: FormBuilder, private formService: FormService , private localStorageService: LocalstorageService){
    const residencyInformation = this.localStorageService.getItem('residencyInformation');
  
  // Verificar si existe un valor en el local storage y llenar el formulario
    if (residencyInformation) {
      this.residencyInformationForm.patchValue(residencyInformation);
    }
  }

  onSubmit = () => {
    const residencyInformation = this.residencyInformationForm.value;
    this.localStorageService.setItem('residencyInformation',residencyInformation);
    this.formService.addProperty('residencyInformation',this.localStorageService.getItem('residencyInformation'));
  }

}
