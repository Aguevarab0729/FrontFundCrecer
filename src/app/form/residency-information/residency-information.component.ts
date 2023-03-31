import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

//  interface residency form
import { Residency } from 'src/app/interfaces/form/residency';

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

  constructor(private formBuilder: FormBuilder){};

  onSubmit = () => {
    console.warn(this.residencyInformationForm.value);
  }

}
