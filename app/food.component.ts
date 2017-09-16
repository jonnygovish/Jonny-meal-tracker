import { Component } from '@angular/core';
import { Food} from './food.model'

@Component({
  selector: 'food',
  template: `
  <new-food
  (newMealSender)="addMeal($event)"
  ></new-food>
  <meal-list
  [childMealList]="food"
  ></meal-list>
  `
})

export class FoodComponent {
  public food: Food[] =[
  new Food("Steak with Fries", "Lunch", 1665),
    new Food("Grilled Cheese", "Dinner",700),
    new Food("Yogurt and Granola", "Breakfast", 200),
    new Food("Banana", "Snack", 100),
    new Food("Ice Cream","Snack", 1400),
  ];
  addMeal(newMealFromChild: Food){
  	this.food.push(newMealFromChild);
  }
}
