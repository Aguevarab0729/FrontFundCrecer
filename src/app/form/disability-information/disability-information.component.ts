import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

//  Interface de form disability
import { Disability } from 'src/app/interfaces/form/disability';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { FormService } from '../form.service';
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
    disabilityRegistryEnrollment: ['false']
  })

  formValidator = createValidator<Disability>(this.disabilityForm, {
    disability: [ required() ],
    certifiedDisability: [ required() ],
    entityCertifiesDisability: [],
    disabilityCategory: [],
    specifiedDisability: [],
    disabilityRegistryEnrollment: []
  })

  constructor(private formBuilder: FormBuilder, private formService: FormService , private localStorageService: LocalstorageService){
    const disabilityInfo = this.localStorageService.getItem('disabilityInfo');
  
  // Verificar si existe un valor en el local storage y llenar el formulario
    if (disabilityInfo) {
      this.disabilityForm.patchValue(disabilityInfo);
    }
  }

  onSubmit = () => {
    const disabilityInfo = this.disabilityForm.value;
    this.localStorageService.setItem('disabilityInfo',disabilityInfo);
    this.formService.addProperty('disabilityInfo',this.localStorageService.getItem('disabilityInfo'));
  }

  
}
