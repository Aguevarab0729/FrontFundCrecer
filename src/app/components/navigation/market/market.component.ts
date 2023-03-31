import { MarketService } from 'src/app/services/market.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap'
import * as $ from 'jquery';
import { ModalMarketComponent } from '../../modals/modal-market/modal-market.component';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})

export class MarketComponent implements OnInit {
  
  marketInfo: any; // Variable para almacenar la información de la API
  
  constructor(private marketService: MarketService, private modalService: NgbModal){}
  
  ngOnInit(): void {
    // Llamada al servicio para obtener la información de la API
    this.marketService.getAllMarkets().subscribe(
      (data) => {
        console.log(data)
        this.marketInfo = data;
      },
      (error) => {
        console.log(error);
      }
    );
  };

  openModal(event: any) {
    if (event.target.tagName !== 'INPUT') {
      const modalRef = this.modalService.open(ModalMarketComponent);
      
    }
  }
};
