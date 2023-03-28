import { Component } from '@angular/core';
import { importService } from 'src/app/services/import.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.scss']
})
export class ImportComponent {
  archivoSeleccionado: File|any;

  constructor(private importDataService: importService) { 
    this.archivoSeleccionado = null;
  }

  seleccionarArchivo(event: any): void {
    this.archivoSeleccionado = event.target.files[0];
  }

  cargarArchivo(): void {
    this.importDataService.importarArchivo(this.archivoSeleccionado);
  }
}



 
 
