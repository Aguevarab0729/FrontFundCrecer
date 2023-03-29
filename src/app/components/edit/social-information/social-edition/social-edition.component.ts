import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SocialInformationService } from 'src/app/services/path-services/social-information.service';

@Component({
  selector: 'app-social-edition',
  templateUrl: './social-edition.component.html',
  styleUrls: ['./social-edition.component.scss']
})
export class SocialEditionComponent implements OnInit {
  @Input() beneficiary: any;
  
  
  
constructor(private fb: FormBuilder,
                
        ) {
  
  }
  
    ngOnInit() {
      
  }
  
   
    
    
  }