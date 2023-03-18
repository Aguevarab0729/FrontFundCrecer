import { Component } from '@angular/core';
import { BeneficiariesService } from 'src/app/services/beneficiaries.service';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap'
import { ModalWindowComponent } from '../modal-window/modal-window.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  

  listBeneficiaries: any[] = [];

  constructor (private _BeneficiariesService: BeneficiariesService,
    private modalService: NgbModal) {}

  ngOnInit(): void {
  this.getListBeneficiaries();
  
  }

   getListBeneficiaries() {
    this._BeneficiariesService.getBeneficiaries().subscribe((data: any[]) => {
      this.listBeneficiaries = data;
      console.log(this.listBeneficiaries)
    })
  }

  openModal(beneficiary: any) {
    const modalRef = this.modalService.open(ModalWindowComponent);
    modalRef.componentInstance.beneficiary = beneficiary;
  }

}
