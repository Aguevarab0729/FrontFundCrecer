import { Component, ElementRef, ViewChild } from '@angular/core';
import { ImportService } from 'src/app/services/import.service';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.scss']
})
export class ImportComponent {

  @ViewChild('fileInput') fileInput!: ElementRef;
  
  selectedFile: File | null = null;

  constructor(private importService: ImportService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile)
  }

  onImport() {
    if (!this.selectedFile) {
      return;
    }

    this.importService.importarArchivo(this.selectedFile).subscribe(
      () => {
        this.selectedFile = null;
        this.fileInput.nativeElement.value = '';
        alert('Archivo importado correctamente');
      },
      (error) => {
        console.log(error);
        alert('Ocurrió un error al importar el archivo');
      }
    );
  }
}



 
 
