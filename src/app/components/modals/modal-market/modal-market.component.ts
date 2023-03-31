import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { forkJoin } from 'rxjs';
import { MarketService } from 'src/app/services/market.service';

@Component({
  selector: 'app-modal-market',
  templateUrl: './modal-market.component.html',
  styleUrls: ['./modal-market.component.scss']
})
export class ModalMarketComponent {

  @Input() marketInfo: any;
  editing = false;
  selectedFood: any;
  foodData = {
    name: '',
    quantity: ''
  };

  constructor(public activeModal: NgbActiveModal,
              private _MarketService: MarketService,
              private toastr: ToastrService) { }

  editFood(food: any) {
    this.editing = true;
    this.selectedFood = { ...food };
    this.foodData = {
      name: this.selectedFood.name,
      quantity: this.selectedFood.quantity
    };
  }

  saveFood() {
    const requests = [];
  
    // Recorremos el arreglo de alimentos y armamos las llamadas al servicio
    for (const food of this.marketInfo.foodsToPrepare) {
      const request = this._MarketService.updateFoodQuantity(this.marketInfo.type, food.name, food.quantity);
      requests.push(request);
    }
  
    // Ejecutamos las llamadas en paralelo y esperamos a que todas finalicen
    forkJoin(requests).subscribe(
      () => {
        // Se ejecuta cuando todas las llamadas finalizaron correctamente
        console.log('Datos actualizados correctamente');
        this.activeModal.close();
        this.toastr.success('Datos actualizados correctamente');
      },
      error => {
        // Se ejecuta si alguna de las llamadas falla
        console.error('Error al actualizar los datos:', error);
      }
    );
  }}