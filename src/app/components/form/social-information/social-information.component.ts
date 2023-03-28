import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-social-information',
  templateUrl: './social-information.component.html',
  styleUrls: ['./social-information.component.scss']
})
export class SocialInformationComponent implements OnInit {

  socialInformationForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder){};

  ngOnInit(): void {
    this.socialInformationForm = this.formBuilder.group({
      groupEthnicity: ['', Validators.required],
      beneficiarySisbenized: ['', Validators.required],
      sisbenScore: ['', Validators.required],
      belongsToFamiliesInAction: ['', Validators.required],
      directlyAffectedByArmedConflict: ['', Validators.required],
      focusingCriteria: ['', Validators.required],
      justificationDocumentExists: ['', Validators.required]
    });

  }

  onSubmit = () => {
    console.warn(this.socialInformationForm.value);
  }

}

