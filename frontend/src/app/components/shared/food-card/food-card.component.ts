import { Component, Input } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.scss']
})
export class FoodCardComponent {
  @Input() food: Food={} as Food;

}
