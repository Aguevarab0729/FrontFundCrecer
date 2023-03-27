import { Component } from '@angular/core';
import { BeneficiariesService } from 'src/app/services/beneficiaries.service';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap'
import { ModalWindowComponent } from '../modal-window/modal-window.component';
import { MarketService } from 'src/app/services/market.service';
import { forkJoin } from 'rxjs';
import { ExportComponent } from '../export/export.component';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  listBeneficiaries: any[] = [];
  beneficiariesToShow: any[] = [];
  markets: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 25;
  showInactive: boolean = false;
  selectedDupla: string = "";
  selectedUnity: string = "";
  selectedMarket: string = "";
  duplas: string[] = [];
  unitys: string [] = [];
  filteredBeneficiaries: any[] = [];
  Beneficiaries: any[] = [];
  
  
  


  constructor(
    private _BeneficiariesService: BeneficiariesService,
    private _marketService: MarketService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.getListBeneficiaries();
    const types = ['GESTANTES LACTANTES', '6 A 11  MESES', '1 A 2 AÑOS', '3  A 5 AÑOS'];
    const marketRequests = types.map(type => this._marketService.getMarketByType(type));
    forkJoin(marketRequests)
      .subscribe(responses => {
        responses.forEach(response => {
          this.markets.push(...response);
        });
        console.log(this.markets);
        
      });
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
  
      // Recorre cada beneficiario y determina el tipo de mercado correspondiente utilizando su edad
      this.listBeneficiaries.forEach(beneficiary => {
        const age = this.calculateAge(beneficiary.birthinformation.birthDate);
        let market = null;
        if (age >= 0 && age <= 5/12) {
          market = this.markets.find(m => m.type === 'GESTANTES LACTANTES');
        } else if (age >= 6/12 && age <= 2) {
          market = this.markets.find(m => m.type === '6 A 11  MESES');
        } else if (age >= 2 && age <= 5) {
          market = this.markets.find(m => m.type === '1 A 2 AÑOS');
        } else {
          market = this.markets.find(m => m.type === '3  A 5 AÑOS');
        }
        beneficiary.marketType = market ? market.type : 'MAYOR DE EDAD';
        console.log(`foodsToPrepare - Beneficiary ${beneficiary.basicinfo.fullName}:`, market.foodsToPrepare);
        console.log(`nutritionalFoods - Beneficiary ${beneficiary.basicinfo.fullName}:`, market.nutritionalFoods);
      });
  
      // Recorre cada beneficiario y agrega un objeto al array Beneficiaries con numDoc y isChecked
      this.Beneficiaries = [];
      this.listBeneficiaries.forEach(beneficiary => {
        this.Beneficiaries.push({
          numDoc: beneficiary.basicinfo.numDoc,
          isChecked: false
        });
      });
  
      this.filteredBeneficiaries = this.listBeneficiaries.slice(); // Inicializa el arreglo de beneficiarios filtrados
      this.getDuplas();
      this.getUnitys();
      this.updateBeneficiariesToShow();
      console.log(this.listBeneficiaries);
    });
  }

  saveSelection() {
    const Beneficiaries = [];
    let selectedCount = 0;
    let sameDupla = true;
    let sameUnity = true;
    let sameMarketType = true;
  
    // Obtener los beneficiarios seleccionados
    for (const beneficiary of this.listBeneficiaries) {
      if (beneficiary.isSelected) {
        Beneficiaries.push(beneficiary);
        if (selectedCount === 0) {
          // Primer beneficiario seleccionado
          this.selectedDupla = beneficiary.basicinfo.duoName;
          this.selectedUnity = beneficiary.basicinfo.unityName;
          this.selectedMarket = beneficiary.marketType;
        } else {
          // Verificar si la dupla, unidad y tipo de mercado son iguales para todos los beneficiarios seleccionados
          if (beneficiary.basicinfo.duoName !== this.selectedDupla) {
            sameDupla = false;
          }
          if (beneficiary.basicinfo.unityName !== this.selectedUnity) {
            sameUnity = false;
          }
          if (beneficiary.marketType !== this.selectedMarket) {
            sameMarketType = false;
          }
        }
        selectedCount++;
      }
    }
  
    // Si se seleccionaron menos de 17 beneficiarios, mostrar alerta y no guardar selección
    if (selectedCount < 1) {
      alert('Debe seleccionar al menos un beneficiario');
      return;
    }
    if (selectedCount > 17) {
      alert('Solo puede seleccionar hasta 17 beneficiarios');
      return;
    }
  
    // Si los beneficiarios seleccionados no tienen la misma dupla, unidad y tipo de mercado, mostrar alerta y no guardar selección
    if (!sameDupla || !sameUnity || !sameMarketType) {
      alert('Solo puede seleccionar beneficiarios con la misma dupla, unidad y tipo de mercado');
      return;
    }
  
    // Obtener los números de documento de los beneficiarios seleccionados
    const selectedBeneficiaries = Beneficiaries.map(beneficiary => beneficiary.basicinfo.numDoc);
  
    // Guardar el array de números de documento de beneficiarios seleccionados en el LocalStorage
    localStorage.setItem('Beneficiaries', JSON.stringify(selectedBeneficiaries));
  }
   

  exportToExcel(modalService: NgbModal, ExportComponent: any, beneficiariesToExport: any[]) {
    const modalRef = modalService.open(ExportComponent);
    modalRef.componentInstance.beneficiaries = beneficiariesToExport;
  }

 calculateAge(birthDate: string): number {
    const birth = new Date(birthDate);
    const ageInMs = Date.now() - birth.getTime();
    const ageInYears = Math.floor(ageInMs / 1000 / 60 / 60 / 24 / 365.25);
    return ageInYears;
  }
  
  getDuplas() {
    const duplasSet = new Set(this.listBeneficiaries.map(beneficiary => beneficiary.basicinfo.duoName));
    this.duplas = Array.from(duplasSet);
  }

  getUnitys() {
    const unitysSet = new Set(this.listBeneficiaries.map(beneficiary => beneficiary.basicinfo.unityName));
    this.unitys = Array.from(unitysSet);
  }

  

  filterByDupla() {
    if (this.selectedDupla && this.selectedDupla.trim() !== "") {
      if (this.selectedUnity && this.selectedUnity.trim() !== "") {
        // Si hay un filtro por unidad, aplicar ambos filtros al mismo tiempo
        this.filteredBeneficiaries = this.listBeneficiaries.filter(
          beneficiary => beneficiary.basicinfo.duoName === this.selectedDupla &&
          beneficiary.basicinfo.unityName === this.selectedUnity
        );
      } else {
        // Si no hay filtro por unidad, aplicar solo el filtro por dupla
        this.filteredBeneficiaries = this.listBeneficiaries.filter(
          beneficiary => beneficiary.basicinfo.duoName === this.selectedDupla
        );
      }
    } else {
      // Si no hay filtro por dupla, aplicar solo el filtro por unidad
      this.filterByUnity();
      return;
    }
    this.currentPage = 1;
    this.updateBeneficiariesToShow();
  }

  filterByUnity() {
    if (this.selectedUnity && this.selectedUnity.trim() !== "") {
      this.filteredBeneficiaries = this.listBeneficiaries.filter(beneficiary => beneficiary.basicinfo.unityName === this.selectedUnity);
    } else {
      this.filteredBeneficiaries = this.showInactive ? 
        this.listBeneficiaries.filter(beneficiary => !beneficiary.basicinfo.curState) :
        this.listBeneficiaries.filter(beneficiary => beneficiary.basicinfo.curState);
    }
    this.currentPage = 1;
    this.updateBeneficiariesToShow();
  }

 

  updateBeneficiariesToShow() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.beneficiariesToShow = this.filteredBeneficiaries.slice(startIndex, endIndex);
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