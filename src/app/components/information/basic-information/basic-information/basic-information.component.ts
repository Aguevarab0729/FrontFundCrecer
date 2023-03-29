import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.scss']
})
export class BasicInformationComponent {
  
  @Input() beneficiary: any;

  editMode = true;


  
}
