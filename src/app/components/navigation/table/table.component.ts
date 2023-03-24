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
  showInactive: boolean = false;
  selectedDupla: string = "";
  duplas: string[] = [];
  filteredBeneficiaries: any[] = [];
  


  constructor(
    private _BeneficiariesService: BeneficiariesService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.getListBeneficiaries();
    console.log(this.duplas);
  }
  
  getListBeneficiaries() {
    this._BeneficiariesService.getBeneficiaries().subscribe((data: any[]) => {
      if (this.showInactive) {
        // Si el checkbox está activado, mostrar todos los beneficiarios inactivos
        this.listBeneficiaries = data.filter(beneficiary => !beneficiary.basicinfo.curState);
      } else {
        // Si el checkbox está desactivado, mostrar solo los beneficiarios activos
        this.listBeneficiaries = data.filter(beneficiary => beneficiary.basicinfo.curState);
      }
      this.filteredBeneficiaries = this.listBeneficiaries.slice(); // Inicializa el arreglo de beneficiarios filtrados
      this.getDuplas();
      this.updateBeneficiariesToShow();
      console.log(this.listBeneficiaries);
    });
  }

  updateBeneficiariesToShow() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.beneficiariesToShow = this.filteredBeneficiaries.slice(startIndex, endIndex);
  }

  getDuplas() {
    const duplasSet = new Set(this.listBeneficiaries.map(beneficiary => beneficiary.basicinfo.duoName));
    this.duplas = Array.from(duplasSet);
  }

  filterByDupla() {
    if (this.selectedDupla && this.selectedDupla.trim() !== "") {
      this.filteredBeneficiaries = this.listBeneficiaries.filter(beneficiary => beneficiary.basicinfo.duoName === this.selectedDupla);
    } else {
      this.filteredBeneficiaries = this.showInactive ? 
        this.listBeneficiaries.filter(beneficiary => !beneficiary.basicinfo.curState) :
        this.listBeneficiaries.filter(beneficiary => beneficiary.basicinfo.curState);
    }
    this.currentPage = 1;
    this.updateBeneficiariesToShow();
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateBeneficiariesToShow();
    }}

    nextPage() {
      const nextPage = this.currentPage + 1;
      const startIndex = (nextPage - 1) * this.itemsPerPage;
      const nextPageBeneficiaries = this.filteredBeneficiaries.slice(startIndex, startIndex + this.itemsPerPage);
    
      if (nextPage <= this.totalPages && nextPageBeneficiaries.length > 0) {
        this.currentPage = nextPage;
        this.updateBeneficiariesToShow();
      } else {
        // Si la lista de beneficiarios filtrados está vacía, no hacer nada.
        console.log("No hay más beneficiarios para mostrar.");
      }
    }

  toggleInactive() {
    this.showInactive = !this.showInactive;
    this.getListBeneficiaries();
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