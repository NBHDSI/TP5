import { Component, effect, signal } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { Training } from '../training';
import { TrainingItem } from '../training-item/training-item';

@Component({
  selector: 'app-training-list',
  imports: [TrainingItem, JsonPipe],
  templateUrl: './training-list.html',
  styleUrl: './training-list.css'
})
export class TrainingList {
  trainingCatalog = signal<Training[]>([
    { id: 125, name: 'Introduction à Angular', nbDays: 3, isFree: false },
    { id: 587, name: 'Grid & Flexbox', nbDays: 3, isFree: true },
    { id: 879, name: 'Node JS avancé', nbDays: 4, isFree: false },
    { id: 859, name: 'HTML5 & CSS', nbDays: 2, isFree: true }
  ]);

  constructor() {
    effect(() => {
      console.log(this.trainingCatalog());
    });
  }

  onAddTraining() {
    const id = Math.floor(Math.random() * 1000);
    this.trainingCatalog.update(formations => [
      ...formations,
      { id: id, name: 'Nouvelle formation', nbDays: 1, isFree: false }
    ]);
  }

  onRemoveTraining(idTraining: number) {
    this.trainingCatalog.update(formations =>
      formations.filter(f => f.id != idTraining)
    );
  }

  onUpdateTraining(formation: Training) {
    this.trainingCatalog.update(formations =>
      formations.map(f => (f.id == formation.id) ? formation : f)
    );
  }
}
