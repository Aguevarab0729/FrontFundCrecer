import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class importService {

  private myAppUrl: String;
  private myApiUrl: String;

  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'import';
  }

  importarArchivo(file: File): any {
    const formData = new FormData();
    // const url = ;
    formData.append('archivo', file);
    console.log(formData.get('archivo'))
    const url = `${this.myAppUrl}${this.myApiUrl}`;
    const body = formData ;

    this.http.post(url, body).subscribe((response) => {
  console.log(response);
});
    // return this.http.post<any>('http://localhost:3000/import', formData);
  }
}
