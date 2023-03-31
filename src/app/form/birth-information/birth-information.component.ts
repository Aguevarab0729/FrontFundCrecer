import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
//  Interface form birth Information
import { Birth } from 'src/app/interfaces/form/birth';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { FormService } from '../form.service';
import { createValidator, required } from '../validators';

@Component({
  selector: 'app-birth-information',
  templateUrl: './birth-information.component.html',
  styleUrls: ['./birth-information.component.scss']
})
export class BirthInformationComponent {

  birthInformationForm = this.formBuilder.group({
    birthCountry: [''],
    birthDepartment: [''],
    birthMunicipality: [''],
    birthDate: ['']
  });

  formValidator = createValidator<Birth>(this.birthInformationForm, {
    birthCountry: [ required() ],
    birthDepartment: [ required() ],
    birthMunicipality: [ required() ],
    birthDate: [ required() ]
  });

  constructor(private formBuilder: FormBuilder,private formService: FormService, private localStorageService: LocalstorageService){
    const birthinformation = this.localStorageService.getItem('birthinformation');
  
  // Verificar si existe un valor en el local storage y llenar el formulario
    if (birthinformation) {
      this.birthInformationForm.patchValue(birthinformation);
    }
  };

  onSubmit = () => {
    const birthinformation = this.birthInformationForm.value;
    this.localStorageService.setItem('birthinformation',birthinformation);
    this.formService.addProperty('birthinformation',this.localStorageService.getItem('birthinformation'));
  }

  

}
