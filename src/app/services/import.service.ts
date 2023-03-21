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

  importBeneficiaries(formData: FormData): Observable<any> {
    return this.http.post<any>(`${this.myAppUrl}${this.myApiUrl}`, formData);
  }
}