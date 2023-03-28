import { Component, Input } from '@angular/core';



@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent {
  @Input() beneficiary: any;

  

  constructor (  ) {}

  ngOnInit(): void {
  
  
  }

   
  calculateAge(birthDate: string): number {
    const birth = new Date(birthDate);
    const ageInMs = Date.now() - birth.getTime();
    const ageInYears = Math.floor(ageInMs / 1000 / 60 / 60 / 24 / 365.25);
    return ageInYears;
  }


}
