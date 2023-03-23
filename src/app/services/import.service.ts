import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImportService {

  private myAppUrl: String ;
  private myApiUrl: String;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'import';
  }

  importarArchivo(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file, file.name); // add the file to the formData object with the correct name
    return this.http.post<any>(`${this.myAppUrl}${this.myApiUrl}`, formData);
  }
}