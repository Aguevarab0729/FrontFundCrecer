import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class ExportService {
  private myAppUrl: String;
  private myApiUrl: String;
  private selectBeneficiaries = [];
  private exportInfo = {};

  constructor(private http: HttpClient, private loadingService: LoadingService) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'export';
  }

  downloadExcel(data: any, beneficiaries:any) {
    const url = `${this.myAppUrl}${this.myApiUrl}`;
    const body = { data, beneficiaries };
    this.loadingService.showLoading();
    this.http.post(url, body, { responseType: 'blob' }).subscribe(response => {
      this.loadingService.hideLoading();
      const blob = new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'file.xlsx';
      document.body.appendChild(link);
      link.click();
    }, error => {
      this.loadingService.hideLoading();
      console.error('Error:', error);
    });
  }

  // downloadExcel(data: any, beneficiaries:any) {
  //   const url = `${this.myAppUrl}${this.myApiUrl}`;
  //   this.http.post(url, { data, beneficiaries }, { responseType: 'blob' })
  //     .subscribe(response => {
  //       const blob = new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
  //       const url = URL.createObjectURL(blob);
  //       const link = document.createElement('a');
  //       link.href = url;
  //       link.download = 'file.xlsx';
  //       document.body.appendChild(link);
  //       link.click();
  //     });
  // }
}
