import { Component } from '@angular/core';
import { BeneficiariesService } from 'src/app/services/beneficiaries.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  listBeneficiaries: any[] = [];

  constructor (private _BeneficiariesService: BeneficiariesService) {}

  ngOnInit(): void {
  this.getListBeneficiaries();
  }

   getListBeneficiaries() {
    this._BeneficiariesService.getBeneficiaries().subscribe((data: any[]) => {
      this.listBeneficiaries = data;
      console.log(this.listBeneficiaries)
    })
  }
}
