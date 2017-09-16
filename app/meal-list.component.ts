import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Food } from './food.model';

@Component ({
	selector: 'meal-list',
	template: `
	<div *ngFor="let currentMeal of childMealList">
      <h3>{{ currentMeal.name }}</h3>
      <h2>{{ currentMeal.details }}</h2>
      <h2>{{ currentMeal.calories }}</h2>
      </div>
	`
})
export class MealListComponent {
	@Input() childMealList: Food[];

}