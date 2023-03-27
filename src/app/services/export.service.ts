import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExportService {
  private myAppUrl: String;
  private myApiUrl: String;
  private selectBeneficiaries = [];

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'export';
  }
  
  exportSelectBeneficiaries() {
    const formData = new FormData();
    const url = `${this.myAppUrl}${this.myApiUrl}`;
    const body = formData ;
    this.http.post(url, body).subscribe((response) => {
      console.log(response);
    });
  }

  downloadExcel() {
    const url = `${this.myAppUrl}${this.myApiUrl}`;
    const params = { /* ... */ };
    const docNumbers = this.selectBeneficiaries;
    this.http.post(url, { params, docNumbers }, { responseType: 'blob' })
      .subscribe(response => {
        const blob = new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'file.xlsx';
        document.body.appendChild(link);
        link.click();
      });
  }
}
