import { Component } from '@angular/core';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.scss']
})
export class ExportComponent {

  public dataArray: any[] = [];

  public data = {
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
    this.dataArray.push(this.data);
    console.log(this.dataArray);
    this.data = {
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
  }

}
