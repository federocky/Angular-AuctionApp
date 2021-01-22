import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { Store } from 'src/app/models/store.model';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-main-en-subasta',
  templateUrl: './main-en-subasta.component.html',
  styleUrls: ['./main-en-subasta.component.scss']
})
export class MainEnSubastaComponent implements OnInit {
  
  //gestiona los productos
  subastaProductList: Product[] = [];

  //producto seleccionado 
  selectedProduct: Product;

  //tienda seleccionada se asigna valor, me llega con el emitter desde el nav de tiendas.
  //y se utiliza para el filtro de la pipe.
  selectedShop: string;

  //este objeto se envia a el componente store-info para mostrar detalles.
  objectSelectedShop: Store;

  //listamos las tiendas que mandamos a el nav de tiendas para mostrarlas.
  listaTiendas: any[];

  constructor(private _productosService: ProductsService) { }

  ngOnInit(): void {

    //nos traemos los datos del servicio.
    this._productosService.getAllProducts().subscribe( data => {

      //cargamos la lista de productos
      this.subastaProductList = data;

      //cargamos la lista de tiendas
      this.listaTiendas = [... new Set(data.map( data => data.storeName))];

    });

  }

  //aplica valor a selected product que recibimos desde la card product
  //y enviamos a product details.
  setSelectedProduct( id: number ):void {

    this.selectedProduct = this.subastaProductList.find( item => item.id == id);
  }


  /**
   * Al recibir un nombre de tienda seleccionada desde el nav cogemos los valores
   * que necesitamos de ella que se mandaran tanto al detalle de tienda
   * como a el pipe para filtrar.
   */
  setSelectedShop( nombreTienda:string ):void {
    
    //esta es la variable que se manda al filtro.
    this.selectedShop = nombreTienda;

    //si pincho en todas la pongo en null para no mostrar nada.
    if( nombreTienda == 'todas') this.objectSelectedShop = null;
    else {
      
      //variable auxiliar que recoge todos los datos de la tienda seleccionada
      let infoTienda = this.subastaProductList.find( item => item.storeName == nombreTienda);

      //basandonos en la variable anterior cogemos solo los datos necesarios para crear una tienda.
      //que seran enviados a store info.
      this.objectSelectedShop = {
        storeName: infoTienda.storeName,
        storeAvatar: infoTienda.storeAvatarUrl,
        storeDescription: infoTienda.storeDescription
      };
    }  
  }

}
