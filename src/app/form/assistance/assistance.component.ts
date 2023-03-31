import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

//  Interface de form Assistance
import { Assistance } from 'src/app/interfaces/form/assistance';

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

  constructor(private formBuilder: FormBuilder){};

  onSubmit = () => {
    console.warn(this.assistanceForm.value);
  }
}
