import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

//  Interface de form Assistance
import { Assistance } from 'src/app/interfaces/form/assistance';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { FormService } from '../form.service';

import { createValidator, required } from '../validators';


@Component({
  selector: 'app-assistance',
  templateUrl: './assistance.component.html',
  styleUrls: ['./assistance.component.scss']
})

export class AssistanceComponent {

  assistanceForm = this.formBuilder.group({
    requiresAssistance: [''],
    requiresTechSupport: [''],
    hasTechSupport: [''],
    requiresTherapy: [''],
    receivesTherapy: [''],
    hasInterdictionProcess: ['']
  });

  formValidator = createValidator<Assistance>(this.assistanceForm, {
    requiresAssistance: [ required() ],
    requiresTechSupport: [ required() ],
    hasTechSupport: [ required() ],
    requiresTherapy: [ required() ],
    receivesTherapy: [ required() ],
    hasInterdictionProcess: [ required() ]
  });

  constructor(private formBuilder: FormBuilder, private formService: FormService , private localStorageService: LocalstorageService){
    const assistanceInformation = this.localStorageService.getItem('assistanceInformation');
  
  // Verificar si existe un valor en el local storage y llenar el formulario
    if (assistanceInformation) {
      this.assistanceForm.patchValue(assistanceInformation);
    }
  }
  
  onSubmit = () => {
    const assistanceInformation = this.assistanceForm.value;
    this.localStorageService.setItem('assistanceInformation',assistanceInformation);
    this.formService.addProperty('assistanceInformation',this.localStorageService.getItem('assistanceInformation'));
  }

}
