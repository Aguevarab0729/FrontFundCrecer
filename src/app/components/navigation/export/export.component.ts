import { ExportService } from './../../../services/export.service';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { BeneficiariesService } from 'src/app/services/beneficiaries.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.scss']
})
export class ExportComponent {
  isLoading$ = this.loadingService.isLoading$;

  private exportObject: {};

  public data: {
    regional_ciudad: string,
    centro_zonal: string,
    municipio: string,
    modalidad: string,
    servicio: string,
    mes_entrega: string,
    unidad: string,
    dupla: string,
    direccion_punto_entrega: string,
    codigo_punto_entrega: string
  } = {
    regional_ciudad: '',
    centro_zonal: '',
    municipio: '',
    modalidad: '',
    servicio: '',
    mes_entrega: '',
    unidad: '',
    dupla: '',
    direccion_punto_entrega: '',
    codigo_punto_entrega: ''
  };

  public beneficiaries: any[] = [];
  public beneficiariesList: any[]= [];

  constructor(private _ExportService: ExportService, private _BeneficiariesService: BeneficiariesService, private toastr: ToastrService, private loadingService: LoadingService)
  {
    this.refreshBeneficiaries();
    this.refreshListBeneficiaries();
    this.exportObject = {};
  }

  public refreshBeneficiaries(){
    const beneficiariesJSON = JSON.parse(localStorage.getItem('Beneficiaries') ?? '[]');
    this.beneficiaries = beneficiariesJSON;
  }

  async refreshListBeneficiaries() {
    const numDocs = this.beneficiaries;
    let beneficiaryInfo: any[] = [];
    for (const element of numDocs) {
      let beneficiary = await this._BeneficiariesService.getBasicInfoBeneficiary(element).toPromise();
      beneficiaryInfo.push(beneficiary[0]);
    }
    this.beneficiariesList = beneficiaryInfo;
  }

  public discard(){
    this.beneficiariesList = [];
    localStorage.clear();
  }
  
  public onSubmit() {
    const data = {
      regional_ciudad: this.data.regional_ciudad,
      centro_zonal: this.data.centro_zonal,
      municipio: this.data.municipio,
      modalidad: this.data.modalidad,
      servicio: this.data.servicio,
      mes_entrega: this.data.mes_entrega,
      unidad: this.data.unidad,
      dupla: this.data.dupla,
      direccion_punto_entrega: this.data.direccion_punto_entrega,
      codigo_punto_entrega: this.data.codigo_punto_entrega
    };
    this.toastr.info('La exportación estará lista en unos segundos', '¡Exportación en progreso!');
  
    this.refreshBeneficiaries()
  
    const newEntry = {
      data: data,
      beneficiaries: [...this.beneficiaries]
    };
    
    // Agregamos el objeto newEntry al array dataArray
    
    console.log(this.exportObject)
    
    this._ExportService.downloadExcel(newEntry.data,newEntry.beneficiaries);
    this.discard();
  }

}





