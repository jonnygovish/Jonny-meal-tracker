import { Component } from '@angular/core';
import { Food} from './food.model'

@Component({
  selector: 'food',
  template: `
  <div class="container overlay">
    <new-food
    (newMealSender)="addMeal($event)"
    ></new-food>
    <div class="row">
      <div class="col-md-6">
        <meal-list
        [childMealList]="food"
        (clickSender)= "showDetails($event)"
        ></meal-list>
      </div>
      <div class="col-md-6">  
        <edit-meal
	      [childSelectedMeal]="selectedMeal"
	      (doneClickedSender)="finishedEditing()"
        ></edit-meal>
      </div>
    </div>
  </div>
  `
})

export class FoodComponent {
  public food: Food[] =[
  new Food("Steak with Fries", "Lunch", 1665),
    // new Food("Grilled Cheese", "Dinner",700),
    new Food("Yogurt and Granola", "Breakfast", 200),
    // new Food("Banana", "Snack", 100),
    new Food("Ice Cream","Snack", 1400),
  ];
  addMeal(newMealFromChild: Food){
  	this.food.push(newMealFromChild);
  }
  selectedMeal: Food = null;
  showDetails(clickedMeal: Food){
  	this.selectedMeal = clickedMeal;
  }
  finishedEditing() {
  	this.selectedMeal = null;
  }
}
