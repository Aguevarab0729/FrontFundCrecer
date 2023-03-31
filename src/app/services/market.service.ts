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

  getAllMarkets(): Observable<any> {
    const url = `${this.myAppUrl}${this.myApiUrl}`;
    return this.http.get<any>(url);
  }

  getMarketByType(type: string): Observable<any> {
    const url = `${this.myAppUrl}${this.myApiUrl}${type}`;
    console.log(url); // imprime la URL completa en la consola
    return this.http.get<any>(url);
  }

  updateFoodQuantity(marketType: string, name: string, quantity: string) {
    const url = `${this.myAppUrl}${this.myApiUrl}${marketType}`;
    const body = { name, quantity };
    return this.http.patch(url, body);
  }
  
}


