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

   
  

}
