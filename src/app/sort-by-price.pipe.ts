import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByPrice',
})
export class SortByPricePipe implements PipeTransform {
  transform(products: any[]): any[] {
    return products.sort((a: any, b: any) => {
      return b.price - a.price;
    });
  }
}
