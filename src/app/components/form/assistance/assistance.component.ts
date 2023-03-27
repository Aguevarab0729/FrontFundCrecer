import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-assistance',
  templateUrl: './assistance.component.html',
  styleUrls: ['./assistance.component.scss']
})

export class AssistanceComponent implements OnInit {

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

}
