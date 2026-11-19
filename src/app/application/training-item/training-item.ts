import { Component, input, model, output } from '@angular/core';
import { Training } from '../training';

@Component({
  selector: 'app-training-item',
  imports: [],
  templateUrl: './training-item.html',
  styleUrl: './training-item.css'
})
export class TrainingItem {
  training = model.required<Training>();
  indice = input.required<number>({ alias: 'position' });
  deleteTraining = output<number>();

  onDelete() {
    this.deleteTraining.emit(this.training().id);
  }

  onFreeChange() {
    this.training.update(formation => ({ ...formation, isFree: !formation.isFree }));
  }
}
