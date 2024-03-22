import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() alt = "Ceci est la description de l'image";
  @Input() src = '/assets/img/Logo.png';
  @Input() title = 'Titre par défault';
  @Input() description = 'Ceci est la description du produit';
  @Input() prix = '10€';
}
