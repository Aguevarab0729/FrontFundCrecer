import { Component } from '@angular/core';
import { ImportService } from 'src/app/services/import.service';


@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.scss']
})
export class ImportComponent {
  ruta_del_archivo: string;

  constructor(private importService: ImportService) {
    this.ruta_del_archivo = '';
  }

  importarDatos() {
    this.importService.importData(this.ruta_del_archivo).subscribe(
      response => {
        console.log(response);
        // hacer algo con la respuesta, si es necesario
      },
      error => {
        console.error(error);
        // manejar el error, si es necesario
      }
    );
  }
}