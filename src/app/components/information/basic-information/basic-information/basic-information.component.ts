import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.scss']
})
export class BasicInformationComponent {
  
  @Input() beneficiary: any;

  editMode = true;


  calculateAge(birthDate: string): number {
    const birth = new Date(birthDate);
    const ageInMs = Date.now() - birth.getTime();
    const ageInYears = Math.floor(ageInMs / 1000 / 60 / 60 / 24 / 365.25);
    return ageInYears;
  }
}
