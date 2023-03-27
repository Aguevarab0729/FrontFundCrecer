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
    // Obtenemos los valores de Beneficiaries almacenados en localStorage
    const beneficiaries = JSON.parse(localStorage.getItem('Beneficiaries') ?? '[]');
    console.log(beneficiaries);
  
    // Asignamos los valores de Beneficiaries al array beneficiaries
    this.beneficiaries = beneficiaries;
    console.log(beneficiaries);
  
    // Creamos un nuevo objeto que contenga tanto data como beneficiaries
    const newData = {
      data: this.data,
      beneficiaries: this.beneficiaries
      
    };
    
    // Agregamos el objeto newData al array dataArray
    this.dataArray.push(newData);
    console.log(this.dataArray);
  
    // Limpiamos el objeto data y el array beneficiaries para poder agregar más datos
   /* this.data = {
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
    console.log(this.beneficiaries)*/
  
    // Convertimos newData a una cadena JSON y la mostramos en la consola
    const jsonData = JSON.stringify(newData);
    console.log(jsonData);
  }}





