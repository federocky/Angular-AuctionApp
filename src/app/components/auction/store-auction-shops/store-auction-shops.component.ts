import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-store-auction-shops',
  templateUrl: './store-auction-shops.component.html',
  styleUrls: ['./store-auction-shops.component.scss']
})
export class StoreAuctionShopsComponent implements OnInit {

  //recibe el listado de tiendas
  @Input() tiendas: string[];

  //mando la tienda seleccionada
  @Output() tiendaSeleccionada: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
