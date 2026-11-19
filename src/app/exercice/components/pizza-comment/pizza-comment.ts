import { Component, input, output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Comment } from '../../models/comment';

@Component({
  selector: 'xxx-pizza-comment',
  imports: [DatePipe],
  templateUrl: './pizza-comment.html',
  styleUrl: './pizza-comment.css'
})
export class PizzaComment {
  comment = input.required<Comment>();

  deleteComment = output<number>();
  onDelete() {
    this.deleteComment.emit(this.comment().id);
  }
}
