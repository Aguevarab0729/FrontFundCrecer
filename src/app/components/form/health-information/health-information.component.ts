import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-health-information',
  templateUrl: './health-information.component.html',
  styleUrls: ['./health-information.component.scss']
})
export class HealthInformationComponent implements OnInit {

  healtInformationForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder){};

  ngOnInit(): void {
    this.healtInformationForm = this.formBuilder.group({
      regime: ['', Validators.required],
      eps: ['', Validators.required],
      hasVaccinationCard: ['', Validators.required],
      vaccinationVerificationDate: ['', Validators.required],
      vaccinationCardUpToDate: ['', Validators.required],
      hasGrowthAndDevelopmentCard: ['', Validators.required],
      growthDevelopmentControlsReceived: ['', Validators.required],
      prematurenessBackground: ['', Validators.required],
      under40Weeks: ['', Validators.required],
      cefalicProfile: ['', Validators.required],
      gestationalAgeAtBirth: ['', Validators.required],
      weightAtBirth: ['', Validators.required],
      heightAtBirth: ['', Validators.required],
      exclusivelyBreastfeeding: ['', Validators.required],
      exclusiveBreastfeedingDuration: ['', Validators.required],
      totalBreastfeedingDuration: ['', Validators.required],
      gestationWeeks: ['', Validators.required],
      ticketNumber: ['', Validators.required]
    })
  }

  onSubmit = () => {
    console.warn(this.healtInformationForm.value);
  }

}
