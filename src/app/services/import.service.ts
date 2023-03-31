import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoadingService } from './loading.service';
@Injectable({
  providedIn: 'root'
})
export class importService {

  isLoading: boolean = false;

  private myAppUrl: String;
  private myApiUrl: String;

  constructor(private http: HttpClient, private loadingService: LoadingService) { 
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
    this.isLoading = true;
    this.loadingService.showLoading();

    return this.http.post<any>(url, formData).pipe(
      tap(() => this.loadingService.hideLoading()),
      catchError((error) => {
        this.loadingService.hideLoading();
        throw error;
      })
      );
  };


    // return this.http.post<any>('http://localhost:3000/import', formData);
  }

