import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() alt = "Ceci est la description de l'image";
  @Input() src = '/assets/img/Logo.png';

  @Input() description = 'Ceci est la description du produit';

  cards = [
    { title: '', price: 1 },
    { title: '', price: 2 },
    { title: '', price: 3 },
    { title: '', price: 4 },
    { title: '', price: 5 },
    { title: '', price: 6 },
    { title: '', price: 7 },
    { title: '', price: 8 },
    { title: '', price: 9 },
    { title: '', price: 10 },
    { title: '', price: 11 },
    { title: '', price: 12 },
  ];
}
