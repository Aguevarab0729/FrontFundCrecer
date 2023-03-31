import { Component } from '@angular/core';
import { importService } from 'src/app/services/import.service';
import { NgForm } from '@angular/forms';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.scss']
})
export class ImportComponent {
  archivoSeleccionado: File|any;
  isLoading$ = this.loadingService.isLoading$;

  constructor(private importDataService: importService, private loadingService: LoadingService) { 
    this.archivoSeleccionado = null;
  }

  seleccionarArchivo(event: any): void {
    this.archivoSeleccionado = event.target.files[0];
  }

  

  cargarArchivo(): void {
    this.importDataService.importarArchivo(this.archivoSeleccionado).subscribe(
      (result: any) => {
        // procesar resultado
      },
      (error: any) => {
        // manejar error
      }
    );
  }
}
