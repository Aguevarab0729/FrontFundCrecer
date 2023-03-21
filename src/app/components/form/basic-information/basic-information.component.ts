import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.scss']
})
export class BasicInformationComponent implements OnInit {

  basicInformationForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder){};

  ngOnInit(): void {
    this.basicInformationForm = this.formBuilder.group(
      {
        numDoc: ['', Validators.required],
        curState: ['', Validators.required],
        joinDate: ['', Validators.required],
        exitDate: ['', Validators.required],
        enterBy: ['', Validators.required],
        reasonForExit: '',
        otherExitReason: '',
        unityName: ['', Validators.required],
        duoName: ['', Validators.required],
        teachers: '',
        documentType: ['', Validators.required],
        firstName: ['', Validators.required],
        secondName: '',
        firstLastName: ['', Validators.required],
        secondLastName: ['', Validators.required],
        gender: ['', Validators.required],
      }
    );

    this.basicInformationForm.valueChanges.subscribe()
  }

  onSubmit = () => {
    console.warn(this.basicInformationForm.value);
  }
};
