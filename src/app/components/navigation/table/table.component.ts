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
  beneficiariesToShow: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 25;

  constructor(
    private _BeneficiariesService: BeneficiariesService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.getListBeneficiaries();
  }
  getListBeneficiaries() {
    this._BeneficiariesService.getBeneficiaries().subscribe((data: any[]) => {
      this.listBeneficiaries = data;
      this.updateBeneficiariesToShow();
      console.log(this.listBeneficiaries)
    });
  }
  updateBeneficiariesToShow() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.beneficiariesToShow = this.listBeneficiaries.slice(startIndex, endIndex);
  }
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateBeneficiariesToShow();
    }}
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateBeneficiariesToShow();
    }
  }

  get totalBeneficiaries() {
    return this.listBeneficiaries.length;
  }

  get startIndex() {
    return (this.currentPage - 1) * this.itemsPerPage + 1;
  }

  get endIndex() {
    const endIndex = this.startIndex + this.itemsPerPage - 1;
    return endIndex > this.totalBeneficiaries ? this.totalBeneficiaries : endIndex;
  }
  
  get totalPages() {
    return Math.ceil(this.totalBeneficiaries / this.itemsPerPage);
  }

  openModal(beneficiary: any) {
    const modalRef = this.modalService.open(ModalWindowComponent);
    modalRef.componentInstance.beneficiary = beneficiary;
  }
}