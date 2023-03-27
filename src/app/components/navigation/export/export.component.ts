import { Component } from '@angular/core';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.scss']
})
export class ExportComponent {

  public dataArray: any[] = [];

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

  public onSubmit() {
    const newData = {
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
  
    // Obtenemos los valores de Beneficiaries almacenados en localStorage
    const beneficiaries = JSON.parse(localStorage.getItem('Beneficiaries') ?? '[]');
  
    // Asignamos los valores de Beneficiaries al array beneficiaries
    this.beneficiaries = beneficiaries;
  
    // Agregamos el objeto data y el array beneficiaries al objeto newEntry
    const newEntry = {
      data: newData,
      beneficiaries: [...this.beneficiaries]
    };
  
    // Agregamos el objeto newEntry al array dataArray
    this.dataArray.push(newEntry);
    console.log(this.dataArray);
  
    // Limpiamos el objeto data y el array beneficiaries para poder agregar más datos
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
    this.beneficiaries = [];
  }
}



