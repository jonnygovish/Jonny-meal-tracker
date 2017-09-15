import { Component} from '@angular/core';
import{ Food } from './food.model';

@Component({
	selector: "new-food",
	template: `
	<div class=" container">
		<h1>Meal Tracker</h1>
  		<label>Enter A Meal</label>
  		<input #newMeal>
	</div>
	<div>
  		<label>Enter Detail</label>
  		<input #newDetail>
	</div>
	<div>
  		<label>Enter Calories</label>
  		<input #newCalories>
  		<button (click)="
addClicked(newMeal.value, newDetail.value, newCalories);
newMeal.value='';
newDetail.value='';
newMeal.value='';
">Add</button>
	</div>

	`
})
export class NewFoodComponent{

}