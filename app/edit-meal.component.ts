import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Food } from './food.model';

@Component ({
	selector: 'edit-meal',
	template: `

		<div class="panel panel-default" *ngIf="childSelectedMeal">
			<div class="panel-heading">
				<h1 class="panel-title">Edit Meal</h1>
			</div>
			<div class="panel-body">
				<div class="edit">
					<label>Meal:</label>
					<input [(ngModel)]="childSelectedMeal.name" class="input-sm edit-field">
				</div>
				<div class="edit">
					<label>Meal Details:</label>
					<input [(ngModel)]="childSelectedMeal.details" class="input-sm edit-field">
				</div>
				<div class="edit">
					<label>Number of Calories:</label>
					<input [(ngModel)]="childSelectedMeal.calories" class="input-sm edit-field">
				</div>
			</div>
			<div class="panel-footer text-right"><button (click)="doneClicked()" class="btn btn-success">Done</button></div>
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