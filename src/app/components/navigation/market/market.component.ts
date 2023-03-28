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

    var $cell = $('.card');

    //open and close card when clicked on card
    $cell.find('.js-expander').click(function() {

      var $thisCell = $(this).closest('.card');

      if ($thisCell.hasClass('is-collapsed')) {
        $cell.not($thisCell).removeClass('is-expanded').addClass('is-collapsed').addClass('is-inactive');
        $thisCell.removeClass('is-collapsed').addClass('is-expanded');
        if ($cell.not($thisCell).hasClass('is-inactive')) {
          //do nothing
        } else {
          $cell.not($thisCell).addClass('is-inactive');
        }
      } else {
        $thisCell.removeClass('is-expanded').addClass('is-collapsed');
        $cell.not($thisCell).removeClass('is-inactive');
      }
    });

    //close card when click on cross
    $cell.find('.js-collapser').click(function() {
      var $thisCell = $(this).closest('.card');
      $thisCell.removeClass('is-expanded').addClass('is-collapsed');
      $cell.not($thisCell).removeClass('is-inactive');
    });
  }

    
}

