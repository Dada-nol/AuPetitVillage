import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByPrice',
})
export class SortByPricePipe implements PipeTransform {
  transform(product: any[], args: any[]): any {
    const sortDirection = args[0];

    let multiplier = 1;

    if (sortDirection === 'desc') {
      multiplier = -1;
    }

    product.sort((a: any, b: any) => {
      if (a.price < b.price) {
        return -1 * multiplier;
      } else if (a.price > b.price) {
        return 1 * multiplier;
      } else {
        return 0;
      }
    });

    return product;
  }
}
