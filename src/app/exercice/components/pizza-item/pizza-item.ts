import { Component, model, output, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Pizza } from '../../models/pizza';
import { PizzaComment } from '../pizza-comment/pizza-comment';

@Component({
  selector: 'xxx-pizza-item',
  imports: [DecimalPipe, PizzaComment],
  templateUrl: './pizza-item.html',
  styleUrl: './pizza-item.css'
})
export class PizzaItem {
  pizza = model.required<Pizza>();
  showComments = signal(false);
  deletePizza = output<number>();
  onDelete() {
    this.deletePizza.emit(this.pizza().id);
  }
  onToggleComments() {
    this.showComments.update(v => !v);
  }
  onDeleteComment(idComment: number) {
    this.pizza.update(p => ({
      ...p,
      comments: p.comments?.filter(c => c.id != idComment)
    }));
  }
}
