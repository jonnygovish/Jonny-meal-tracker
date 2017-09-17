import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Food } from './food.model';

@Component ({
	selector: 'meal-list',
	template: `
	<div class="container">
	<select (change)="onchange($event.target.value)">
		<option value="all" selected="selected">Show All</option>
		<option value="highCalorie">High-calorie Food</option>
		<option value="lowCalorie">Low-calorie Food</option>
	</select>
	<div *ngFor="let currentMeal of childMealList | calories:selectedCalories">
      <h3>{{ currentMeal.name }}</h3>
      <p>Meal details:{{ currentMeal.details }}</p>
      <p>Number of calories:{{ currentMeal.calories }}</p>
      <button (click)="editButtonHasBeenClicked(currentMeal)">Change Your Meal</button>
      </div>
      </div>
	`
})
export class MealListComponent {
	@Input() childMealList: Food[];
	@Output() clickSender = new EventEmitter();
	public selectedCalories: string = "all";
	onchange(optionFromMenu) {
		this.selectedCalories = optionFromMenu;
	}
	editButtonHasBeenClicked(listToEdit: Food){
		this.clickSender.emit(listToEdit);
	}

}