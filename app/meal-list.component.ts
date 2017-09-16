import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Food } from './food.model';

@Component ({
	selector: 'meal-list',
	template: `
	<div class="container">
	<div *ngFor="let currentMeal of childMealList">
      <h3>{{ currentMeal.name }}</h3>
      <p>Meal details:{{ currentMeal.details }}</p>
      <p>Number of calories:{{ currentMeal.calories }}</p>
      </div>
      </div>
	`
})
export class MealListComponent {
	@Input() childMealList: Food[];

}