import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-residency-information',
  templateUrl: './residency-information.component.html',
  styleUrls: ['./residency-information.component.scss']
})
export class ResidencyInformationComponent implements OnInit {

  residencyInformationForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder){};

  ngOnInit(): void {
    this.residencyInformationForm = this.formBuilder.group({
      countryOfResidence: ['', Validators.required],
      residenceDepartment: ['', Validators.required],
      locationZone: ['', Validators.required],
      headerType: ['', Validators.required],
      localityName: ['', Validators.required],
      neighborhood: ['', Validators.required],
      foreignZoneName: ['', Validators.required],
      address: ['', Validators.required],
      primaryPhone: ['', Validators.required],
      secondaryPhone: ['', Validators.required],
      householdStratum: ['', Validators.required]
    });

  }

  onSubmit = () => {
    console.warn(this.residencyInformationForm.value);
  }

}
