import { Pipe, PipeTransform } from '@angular/core';
import { CardComponent } from './card/card.component';

@Pipe({
  name: 'sortByPrice',
})
export class SortByPricePipe implements PipeTransform {
  transform(any: CardComponent): any {
    return;
  }
}
