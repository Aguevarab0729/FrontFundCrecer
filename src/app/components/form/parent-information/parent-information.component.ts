import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-parent-information',
  templateUrl: './parent-information.component.html',
  styleUrls: ['./parent-information.component.scss']
})
export class ParentInformationComponent implements OnInit {

  parentInformationForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder){};

  ngOnInit(): void {
    this.parentInformationForm = this.formBuilder.group(
      {
        fatherDocumentType: ['', Validators.required],
        fatherDocumentNumber: ['', Validators.required],
        fatherFirstName: ['', Validators.required],
        fatherSecondName: ['', Validators.required],
        fatherFirstLastname: ['', Validators.required],
        fatherSecondLastname: ['', Validators.required],
        fatherBirthdate: ['', Validators.required],
        fatherBirthCountry: ['', Validators.required],
        fatherBirthDepartment: ['', Validators.required],
        fatherBirthCity: ['', Validators.required],

        motherDocumentType: ['', Validators.required],
        motherDocumentNumber: ['', Validators.required],
        motherFirstName: ['', Validators.required],
        motherSecondName: ['', Validators.required],
        motherFirstLastname: ['', Validators.required],
        motherSecondLastname: ['', Validators.required],
        motherBirthdate: ['', Validators.required],
        motherBirthCountry: ['', Validators.required],
        motherBirthDepartment: ['', Validators.required],
        motherBirthCity: ['', Validators.required]
      }
    );

  }

  onSubmit = () => {
    console.warn(this.parentInformationForm.value);
  }
}

//validar el uso de form array ya que son dos campos independientes
