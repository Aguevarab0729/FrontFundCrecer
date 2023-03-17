import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BeneficiariesService {

  private myAppUrl: String ;
  private myApiUrl: String;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/beneficiaries'
   }

   getBeneficiaries(): Observable<any>{
    return this.http.get<any>(`${this.myAppUrl}${this.myApiUrl}`)
   }

   
}