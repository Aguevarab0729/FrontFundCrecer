import { Component } from '@angular/core';
import { importService } from 'src/app/services/import.service';
import { NgForm } from '@angular/forms';
import { LoadingService } from 'src/app/services/loading.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.scss']
})
export class ImportComponent {
  archivoSeleccionado: File|any;
  isLoading$ = this.loadingService.isLoading$;

  constructor(private importDataService: importService, private toastr: ToastrService, private loadingService: LoadingService) { 
    this.archivoSeleccionado = null;
  }

  seleccionarArchivo(event: any): void {
    this.archivoSeleccionado = event.target.files[0];
  }

  cargarArchivo(): void {
    this.toastr.info('Ten paciencia, ¡por favor!','Se ha empezado a importar')
    this.importDataService.importarArchivo(this.archivoSeleccionado).subscribe(
      (result: any) => {
        // procesar resultado
        this.toastr.success('','Se ha importado correctamente')
      },
      (error: any) => {
        // manejar error
        this.toastr.error('','Un error ha ocurrido')
      }
    );
  }
}
