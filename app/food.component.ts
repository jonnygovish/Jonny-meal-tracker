import { Component } from '@angular/core';
import { Food} from './food.model'

@Component({
  selector: 'food',
  template: `
  <new-food></new-food>
  `
})

export class FoodComponent {
  public food: Food[] =[];
}
