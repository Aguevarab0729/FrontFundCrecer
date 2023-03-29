import { MarketService } from 'src/app/services/market.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})

export class MarketComponent implements OnInit {
  
  marketInfo: any; // Variable para almacenar la información de la API
  
  constructor(private marketService: MarketService){}
  
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


  }
};
