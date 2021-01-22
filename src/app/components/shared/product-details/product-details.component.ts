import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  //recibimos el producto seleccionado
  @Input() selectedProduct: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
