import { Component } from '@angular/core';
import { ImportService } from 'src/app/services/import.service';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.scss']
})
export class ImportComponent {
  private filePath = '';
  private file = '';

  constructor(private importService: ImportService) {}

  onFileSelected(event: any) {
    this.file = event.target.files[0];
    this.filePath = event.target.value; // Obtener la ruta del archivo seleccionado
  }

  uploadFile() {
    if (this.file && this.filePath) {
      const formData = new FormData();
      formData.append('file', this.file);
      this.importService.importBeneficiaries(formData)
        .subscribe(
          () => {
            console.log('Archivo importado correctamente');
          },
          error => console.error(error)
        );
    } else {
      console.error('La ruta del archivo no está definida');
    }
  }
}