import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-birth-information',
  templateUrl: './birth-information.component.html',
  styleUrls: ['./birth-information.component.scss']
})
export class BirthInformationComponent implements OnInit {

  birthInformationForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.birthInformationForm = this.formBuilder.group({
      birthCountry: ['', Validators.required],
      birthDepartment: ['', Validators.required],
      birthMunicipality: ['', Validators.required],
      birthDate: ['', Validators.required]
    })
  }

  onSubmit = () => {
    console.warn(this.birthInformationForm.value);
  }

}
