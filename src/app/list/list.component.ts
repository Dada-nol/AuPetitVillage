import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  products = [
    {
      Id: 1,
      name: 'Nom de la carte',
      price: '1000€',
      content: 'Ceci est la description de la card',
      src: '/assets/img/Logo.png',
      alt: "Ceci est la description de l'image",
    },
    {
      Id: 2,
      name: 'Nom de la carte',
      price: '2000€',
      content: 'Ceci est la description de la card',
      src: '/assets/img/Logo.png',
      alt: "Ceci est la description de l'image",
    },
    {
      Id: 3,
      name: 'Nom de la carte',
      price: '3000€',
      content: 'Ceci est la description de la card',
      src: '/assets/img/Logo.png',
      alt: "Ceci est la description de l'image",
    },
    {
      Id: 4,
      name: 'Nom de la carte',
      price: '4000€',
      content: 'Ceci est la description de la card',
      src: '/assets/img/Logo.png',
      alt: "Ceci est la description de l'image",
    },
    {
      Id: 5,
      name: 'Nom de la carte',
      price: '5000€',
      content: 'Ceci est la description de la card',
      src: '/assets/img/Logo.png',
      alt: "Ceci est la description de l'image",
    },
    {
      Id: 6,
      name: 'Nom de la carte',
      price: '6000€',
      content: 'Ceci est la description de la card',
      src: '/assets/img/Logo.png',
      alt: "Ceci est la description de l'image",
    },
    {
      Id: 7,
      name: 'Nom de la carte',
      price: '7000€',
      content: 'Ceci est la description de la card',
      src: '/assets/img/Logo.png',
      alt: "Ceci est la description de l'image",
    },
    {
      Id: 8,
      name: 'Nom de la carte',
      price: '8000€',
      content: 'Ceci est la description de la card',
      src: '/assets/img/Logo.png',
      alt: "Ceci est la description de l'image",
    },
    {
      Id: 9,
      name: 'Nom de la carte',
      price: '9000€',
      content: 'Ceci est la description de la card',
      src: '/assets/img/Logo.png',
      alt: "Ceci est la description de l'image",
    },
  ];
}
