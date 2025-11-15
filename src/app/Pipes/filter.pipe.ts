import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(products: any[], filterString: string, propName: string): any[] {
    if (products.length === 0 || filterString === '' || propName === '') {
      return products;
    }

    const resultArray = products.filter((product) =>
      product[propName].toLowerCase().includes(filterString.toLowerCase())
    );
    return resultArray;
  }
}
