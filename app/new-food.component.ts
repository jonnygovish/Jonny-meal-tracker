import { Component, Output, EventEmitter } from '@angular/core';
import{ Food } from './food.model';

@Component({
	selector: "new-food",
	template: `
	<div class="container">
  <h1>Meal Tracker</h1>
  <form class="form-inline">
  <div class="jumbotron">
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
      <button class="btn btn-info"(click)="
      addMeal(newMeal.value, newDetail.value, newCalories);
      newMeal.value='';
      newDetail.value='';
      newMeal.value='';
    ">Add</button>
  </div>
    </form>
  
  </div>

	
	`
})
export class NewFoodComponent{
	@Output() newMealSender = new EventEmitter();
	addMeal(name: string, details: string, calories: number){
		var newMealToAdd: Food = new Food(name, calories, details);
		this.newMealSender.emit(newMealToAdd);
	}



}