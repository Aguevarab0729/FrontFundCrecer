import { Component } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-assistance',
  templateUrl: './assistance.component.html',
  styleUrls: ['./assistance.component.scss']
})

export class AssistanceComponent {
  assistanceForm = this.formBuilder.group({
    requiresAssistance: ['', { validators: [Validators.required]}],
    requiresTechSupport: ['', { validators: [Validators.required]}],
    hasTechSupport: ['', { validators: [Validators.required]}],
    requiresTherapy: ['', { validators: [Validators.required]}],
    receivesTherapy: ['', { validators: [Validators.required]}],
    hasInterdictionProcess: ['', { validators: [Validators.required]}],
  });
  constructor(private formBuilder: FormBuilder){

  }
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
