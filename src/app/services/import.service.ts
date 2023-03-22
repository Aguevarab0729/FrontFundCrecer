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

  importData(excelRoute: string): Observable<any> {
    const url = `${this.myAppUrl}${this.myApiUrl}`;
    const body = { path: excelRoute };
    return this.http.post<any>(url, body);
  }
}