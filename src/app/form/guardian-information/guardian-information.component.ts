import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-guardian-information',
  templateUrl: './guardian-information.component.html',
  styleUrls: ['./guardian-information.component.scss']
})
export class GuardianInformationComponent implements OnInit {

  guardianForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.guardianForm = this.formBuilder.group({
      guardianPersonType: ['', Validators.required],
      guardianDocumentType: ['', Validators.required],
      guardianDocumentNumber: ['', Validators.required],
      guardianFirstName: ['', Validators.required],
      guardianSecondName: [''],
      guardianFirstLastName: ['', Validators.required],
      guardianSecondLastName: ['', Validators.required],
      guardianBirthdate: ['', Validators.required],
      guardianBirthCountry: ['', Validators.required],
      guardianBirthDepartment: ['', Validators.required],
      guardianBirthCity: ['', Validators.required]
    })
  }

  onSubmit = () => {
    console.warn(this.guardianForm.value);
  }
}
