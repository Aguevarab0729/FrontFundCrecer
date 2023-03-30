import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

//  Interface de form disability
import { Disability } from 'src/app/interfaces/form/disability';
import { createValidator, required } from '../validators';

@Component({
  selector: 'app-disability-information',
  templateUrl: './disability-information.component.html',
  styleUrls: ['./disability-information.component.scss']
})
export class DisabilityInformationComponent {
  disabilityForm = this.formBuilder.group({
    disability: [''],
    certifiedDisability: [''],
    entityCertifiesDisability: [''],
    disabilityCategory: [''],
    specifiedDisability: [''],
    disabilityRegistryEnrollment: ['']
  })

  formValidator = createValidator<Disability>(this.disabilityForm, {
    disability: [ required() ],
    certifiedDisability: [ required() ],
    entityCertifiesDisability: [],
    disabilityCategory: [],
    specifiedDisability: [],
    disabilityRegistryEnrollment: []
  })

  constructor(private formBuilder: FormBuilder){}

  onSubmit = () => {
    console.warn(this.disabilityForm.value);
  }
}
