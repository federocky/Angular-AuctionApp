import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByShop'
})
export class FilterByShopPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
