import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Food } from './food.model';

@Component ({
	selector: 'meal-list',
	template: `
	<label for="sortby" class="sortby-title">SORT BY CALORIES: </label>
	<select (change)="onchange($event.target.value)" class="input-md" id="sortby">
		<option value="all" selected="selected">Show All</option>
		<option value="highCalorie">High-calorie Food</option>
		<option value="lowCalorie">Low-calorie Food</option>
	</select>

	
		
	
				<div *ngFor="let currentMeal of childMealList | calories:selectedCalories">
				<div class="panel panel-success">
					<div class="panel-heading">
						<h3 class="panel-title">{{currentMeal.name}}</h3>
					</div>
					<div class="panel-body">
      					<p>Meal details:{{ currentMeal.details }}</p>
      					<p>Number of calories:{{ currentMeal.calories }}</p>
      				</div>
      				<div class="panel-footer text-right">
      					<button (click)="editButtonHasBeenClicked(currentMeal)" class="btn btn-warning">Change Your Meal</button>
      				</div>
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