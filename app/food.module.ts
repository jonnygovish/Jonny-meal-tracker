import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { FoodComponent }   from './food.component';
import { NewFoodComponent} from './new-food.component'
import { MealListComponent} from './meal-list.component';
import { EditMealComponent} from './edit-meal.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
  ],
  declarations: [ 
    FoodComponent,
    NewFoodComponent,
    MealListComponent,
    EditMealComponent,

    
  ],
  bootstrap:    [ FoodComponent ]
})

export class FoodModule { }