import { Component, signal } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { Pizza } from '../../models/pizza';
import { PizzaItem } from '../pizza-item/pizza-item';

@Component({
  selector: 'xxx-pizza-list',
  imports: [PizzaItem, JsonPipe],
  templateUrl: './pizza-list.html',
  styleUrl: './pizza-list.css'
})
export class PizzaList {
  pizzasList = signal<Pizza[]>([
    { id: 1, name: 'Neptune', image: 'images/neptune.jpg', price: 11.3, vegetarian: false,
      comments: [
        { id: 1, name: 'Youssef', date: new Date(2026, 9, 12), message: 'Délicieuse Pizza' },
        { id: 2, name: 'Cyrine', date: new Date(2026, 9, 13), message: 'Excellente pizza' }
      ]
    },
    { id: 2, name: '4 Saisons', image: 'images/saisons.jpg', price: 12.5, vegetarian: true,
      comments: [
        { id: 3, name: 'Aziz', date: new Date(2026, 9, 12), message: 'Je recommande vivement' }
      ]
    },
    { id: 3, name: 'Fruits de Mer', image: 'images/mer.jpg', price: 18.4, vegetarian: false },
    { id: 4, name: 'Marguerite', image: 'images/marguerite.jpg', price: 9.8, vegetarian: true,
      comments: [
        { id: 4, name: 'Ghada', date: new Date(2026, 8, 12), message: 'Très moyen' }
      ]
    }
  ]);
  onRemovePizza(idPizza: number) {
    this.pizzasList.update(pizzas => pizzas.filter(p =>p.id!=idPizza));
  }
  onUpdatePizza(pizza: Pizza) {
    this.pizzasList.update(pizzas =>
      pizzas.map(p => (p.id == pizza.id) ? pizza : p)
    );
  }
}
