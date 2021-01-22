import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({
  name: 'filterByShop'
})
export class FilterByShopPipe implements PipeTransform {

  transform(value: Product[], args: string = ''): unknown {
    
    //si le mando vacio o todas devuelvo el array original, si le mando algun filtro(nombre tienda)
    //filtraremos por nombre de tienda.
    if( value ){
      if (args != '' && args != 'todas')return value.filter( item => item.storeName == args);
      else return value;
    }

    return [];
  }

}
