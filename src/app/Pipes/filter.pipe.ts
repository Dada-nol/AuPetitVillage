import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(product: any, filterString: string, propName: string): any[] {
    const resultArray = [];
    if (product.length === 0 || filterString === '' || propName === '') {
      return product;
    }

    for (const name of product) {
      if (name[propName] === filterString) {
        resultArray.push(name);
      }
    }
    return resultArray;
  }
}
