import { Component, Output, EventEmitter } from '@angular/core';
import{ Food } from './food.model';

@Component({
	selector: "new-food",
	template: `
  		<div>
        <h1>Meal Tracker</h1>
      </div>
  		<form class="form-inline">
  			<div class="form-group">
      			<label id="new-food">Enter A Meal</label>
      			<input #newMeal class="input-lg">
  			</div>
  			<div class="form-group">
      			<label id="new-food">Enter Detail</label>
      			<input #newDetail class="input-lg">
  			</div>
  			<div class="form-group">
      			<label id="new-food">Enter Calories</label>
      			<input #newCalories class="input-lg">
  			</div>
      		<button class="btn btn-info"(click)="
      		addMeal(newMeal.value, newDetail.value, newCalories.value);
      		newMeal.value='';
      		newDetail.value='';
      		newCalories.value='';
    		">Add</button>
    	</form>
  
 

	
	`
})
export class NewFoodComponent{
	@Output() newMealSender = new EventEmitter();
	addMeal(name: string, details: string, calories: number){
		var newMealToAdd: Food = new Food(name, details, calories);
		this.newMealSender.emit(newMealToAdd);
	}



}