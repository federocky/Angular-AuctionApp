import { Component, Input, OnInit } from '@angular/core';
import { Store } from 'src/app/models/store.model';

@Component({
  selector: 'app-store-info',
  templateUrl: './store-info.component.html',
  styleUrls: ['./store-info.component.scss']
})
export class StoreInfoComponent implements OnInit {

  //recibo la tienda seleccionada.
  @Input() selectedShop: Store;

  constructor() { }

  ngOnInit(): void {
  }

}
