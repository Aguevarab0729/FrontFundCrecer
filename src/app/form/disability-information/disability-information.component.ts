import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-disability-information',
  templateUrl: './disability-information.component.html',
  styleUrls: ['./disability-information.component.scss']
})
export class DisabilityInformationComponent implements OnInit {
  disabilityForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
   this.disabilityForm = this.formBuilder.group({
    disability: [''],
    certifiedDisability: [''],
    entityCertifiesDisability: [''],
    disabilityCategory: [''],
    specifiedDisability: [''],
    disabilityRegistryEnrollment: ['']
   })
  }
}
