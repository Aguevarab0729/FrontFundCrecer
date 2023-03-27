import { ExportService } from './../../../services/export.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.scss']
})
export class ExportComponent {
  
  constructor(private _ExportService: ExportService){}

  public dataArray: any[] = [];

  data = {
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

  public onSubmit() {
    const newData = this.data = {
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
    this._ExportService.downloadExcel(newData);
    
  }

}
