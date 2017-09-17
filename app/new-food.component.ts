import { Component, Output, EventEmitter } from '@angular/core';
import{ Food } from './food.model';

@Component({
	selector: "new-food",
	template: `
	<div class="container">
		<div class="jumbotron">
  			<h1>Meal Tracker</h1>
  		</div>
  		<form class="form-inline">
  			<div class="form-group">
      			<label>Enter A Meal</label>
      			<input #newMeal>
  			</div>
  			<div class="form-group">
      			<label>Enter Detail</label>
      			<input #newDetail>
  			</div>
  			<div class="form-group">
      			<label>Enter Calories</label>
      			<input #newCalories>
  			</div>
      		<button class="btn btn-info"(click)="
      		addMeal(newMeal.value, newDetail.value, newCalories.value);
      		newMeal.value='';
      		newDetail.value='';
      		newCalories.value='';
    		">Add</button>
    	</form>
  
  </div>

	
	`
})
export class NewFoodComponent{
	@Output() newMealSender = new EventEmitter();
	addMeal(name: string, details: string, calories: number){
		var newMealToAdd: Food = new Food(name, details, calories);
		this.newMealSender.emit(newMealToAdd);
	}



}