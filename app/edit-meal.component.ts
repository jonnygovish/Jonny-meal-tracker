import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Food } from './food.model';

@Component ({
	selector: 'edit-meal',
	template: `
		<div *ngIf="childSelectedMeal">
			<h1>Edit Meal</h1>
			<div>
				<label>Meal</label>
				<input [(ngModel)]="childSelectedMeal.name">
			</div>
			<div>
				<label>Meal Details</label>
				<input [(ngModel)]="childSelectedMeal.details">
			</div>
			<div>
				<label>Number of Calories</label>
				<input [(ngModel)]="childSelectedMeal.calories">
			</div>
			<button (click)="doneClicked()">Done</button>
		</div>

	`

})
export class EditMealComponent {
	@Input() childSelectedMeal: Food;
	@Output() doneClickedSender = new EventEmitter();
	doneClicked() {
		this.doneClickedSender.emit();
	}

}