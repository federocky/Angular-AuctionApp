import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  //recibe producto
  @Input() product: Product;

  //mando el producto seleccionado
  @Output() selectedProduct: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
