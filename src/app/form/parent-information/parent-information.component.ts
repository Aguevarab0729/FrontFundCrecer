import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

//  Interface de form parents
import { Parents } from 'src/app/interfaces/form/parents';

import { createValidator, minLength, required } from '../validators';

@Component({
  selector: 'app-parent-information',
  templateUrl: './parent-information.component.html',
  styleUrls: ['./parent-information.component.scss']
})

export class ParentInformationComponent {
  parentInformationForm = this.formBuilder.group({
    fatherDocumentType: [''],
    fatherDocumentNumber: [''],
    fatherFirstName: [''],
    fatherSecondName: [''],
    fatherFirstLastname: [''],
    fatherSecondLastname: [''],
    fatherBirthdate: [''],
    fatherBirthCountry: [''],
    fatherBirthDepartment: [''],
    fatherBirthCity: [''],

    motherDocumentType: [''],
    motherDocumentNumber: [''],
    motherFirstName: [''],
    motherSecondName: [''],
    motherFirstLastname: [''],
    motherSecondLastname: [''],
    motherBirthdate: [''],
    motherBirthCountry: [''],
    motherBirthDepartment: [''],
    motherBirthCity: ['']
  });

  formValidator = createValidator<Parents>(this.parentInformationForm, {
    fatherDocumentType: [ required() ],
    fatherDocumentNumber: [ required() ],
    fatherFirstName: [ required(), minLength(3)],
    fatherSecondName: [],
    fatherFirstLastname: [ required(), minLength(4)],
    fatherSecondLastname: [ required(), minLength(4)],
    fatherBirthdate: [ required() ],
    fatherBirthCountry: [ required() ],
    fatherBirthDepartment: [ required() ],
    fatherBirthCity: [ required() ],

    motherDocumentType: [ required() ],
    motherDocumentNumber: [ required() ],
    motherFirstName: [ required() ],
    motherSecondName: [ required(), minLength(3)],
    motherFirstLastname: [ required(), minLength(4)],
    motherSecondLastname: [ required(), minLength(4)],
    motherBirthdate: [ required() ],
    motherBirthCountry: [ required() ],
    motherBirthDepartment: [ required() ],
    motherBirthCity: [ required() ]
  });

  constructor(private formBuilder: FormBuilder){};

  onSubmit = () => {
    console.warn(this.parentInformationForm.value);
  }
}
