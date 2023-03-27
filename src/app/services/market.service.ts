import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarketService {

  private myAppUrl: String ;
  private myApiUrl: String;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/market/'
   }

   getMarketByType(type: string): Observable<any> {
    const url = `${this.myAppUrl}${this.myApiUrl}${type}`;
    console.log(url); // imprime la URL completa en la consola
    return this.http.get<any>(url);
  }
}
