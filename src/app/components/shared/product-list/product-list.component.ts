import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  //recibe productos
  @Input() products: Product[];
  
  //recibe filtro
  @Input() filtro: string;

  //envio el producto seleccionado
  @Output() selectedProduct: EventEmitter<number> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

}
