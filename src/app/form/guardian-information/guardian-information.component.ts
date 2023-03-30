import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Guardian } from 'src/app/interfaces/form/guardian';
import { createValidator, minLength, required } from '../validators';


/* import { createValidator } from '../../validators/validator-creator';
import { required, minLength } from '../../validators/validators'; */

@Component({
  selector: 'app-guardian-information',
  templateUrl: './guardian-information.component.html',
  styleUrls: ['./guardian-information.component.scss']
})
export class GuardianInformationComponent {

  guardianInformationForm = this.formBuilder.group({
    guardianPersonType: [''],
    guardianDocumentType: [''],
    guardianDocumentNumber: [''],
    guardianFirstName: [''],
    guardianSecondName: [''],
    guardianFirstLastName: [''],
    guardianSecondLastName: [''],
    guardianBirthdate: [''],
    guardianBirthCountry: [''],
    guardianBirthDepartment: [''],
    guardianBirthCity: ['']
  })

  formValidator = createValidator<Guardian>(this.guardianInformationForm, {
    guardianPersonType: [ required() ],
    guardianDocumentType: [ required() ],
    guardianDocumentNumber: [ required() ],
    guardianFirstName: [ required(), minLength(3)],
    guardianSecondName: [],
    guardianFirstLastName: [ required(), minLength(3) ],
    guardianSecondLastName: [ required(), minLength(3)],
    guardianBirthDate: [ required() ],
    guardianBirthCountry: [ required() ],
    guardianBirthDepartment: [ required() ],
    guardianBirthCity: [ required() ],
  });

  constructor(private formBuilder: FormBuilder){};

  onSubmit = () => {
    console.warn(this.guardianInformationForm.value);
  }
}
