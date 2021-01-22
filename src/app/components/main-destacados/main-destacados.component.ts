import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { DestacadosProductsService } from 'src/app/services/destacados-products.service';

@Component({
  selector: 'app-main-destacados',
  templateUrl: './main-destacados.component.html',
  styleUrls: ['./main-destacados.component.scss']
})
export class MainDestacadosComponent implements OnInit {

  //variable que almacenara todos los productos destacados.
  featuredProductList: Product[];

  //variable para controlar el producto seleccionado
  selectedProduct: Product;

  constructor(private _destacadosService: DestacadosProductsService) { }

  ngOnInit(): void {

    //recibimos los productos desde el servicio
    this._destacadosService.getAllFeatureds()
      .subscribe( data => {
        this.featuredProductList = data;
      })
  }


  //aplica valor a selected product que viene del product card 
  // y se manda a product details.
  setSelectedProduct( id: number ):void {

    this.selectedProduct = this.featuredProductList.find( item => item.id == id);
  }

}
