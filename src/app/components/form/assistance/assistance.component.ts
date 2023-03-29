import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

//  Interface de form Assistance
import { Assistance } from 'src/app/interfaces/form/assistance';

import { createValidator } from '../../validators/validator-creator';
import { required } from '../../validators/validators';

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


/* export class AssistanceComponent implements OnInit {

  assistanceForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {

    this.assistanceForm = this.formBuilder.group(
      {
        requiresAssistance: ['', Validators.required],
        requiresTechSupport: ['', Validators.required],
        hasTechSupport: ['', Validators.required],
        requiresTherapy: ['', Validators.required],
        receivesTherapy: ['', Validators.required],
        hasInterdictionProcess: ['', Validators.required]
      }
    );

    //  nos subscribimos a los cambios que ocurran en el formulario y los mostramos por consola
    this.assistanceForm.valueChanges.subscribe(
      console.log
    )
  }

  onSubmit = () => {
    console.warn(this.assistanceForm.value);
  }

} */
