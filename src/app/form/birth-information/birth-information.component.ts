import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
//  Interface form birth Information
import { Birth } from 'src/app/interfaces/form/birth';
import { createValidator, required } from '../validators';

@Component({
  selector: 'app-birth-information',
  templateUrl: './birth-information.component.html',
  styleUrls: ['./birth-information.component.scss']
})
export class BirthInformationComponent {

  birthInformationForm = this.formBuilder.group({
    birthCountry: [''],
    birthDepartment: [''],
    birthMunicipality: [''],
    birthDate: ['']
  });

  formValidator = createValidator<Birth>(this.birthInformationForm, {
    birthCountry: [ required() ],
    birthDepartment: [ required() ],
    birthMunicipality: [ required() ],
    birthDate: [ required() ]
  });

  constructor(private formBuilder: FormBuilder){};

  onSubmit = () => {
    console.warn(this.birthInformationForm.value);
  }

}
