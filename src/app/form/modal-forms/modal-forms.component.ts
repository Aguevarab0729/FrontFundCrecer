import { LocalstorageService } from 'src/app/services/localstorage.service';
import { FormService } from './../form.service';
import { BeneficiariesService } from 'src/app/services/beneficiaries.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-forms',
  templateUrl: './modal-forms.component.html',
  styleUrls: ['./modal-forms.component.scss']
})
export class ModalFormsComponent {
  constructor(private beneficiariesService:BeneficiariesService, private formService: FormService, private localStorageService:LocalstorageService){}

  createBeneficiary() {
    this.beneficiariesService.postBeneficiary(this.formService.beneficiary).subscribe(
      (response) => {
        // Manejar la respuesta exitosa aquí
        alert('Se ha creado el beneficiario exitosamente.');
        console.log(response);
      },
      (error) => {
        // Manejar el error aquí
        alert('Ha ocurrido un error.');
        console.error(error);
      }
    );
  }

  discard(){
    this.localStorageService.clear();
  }

}
