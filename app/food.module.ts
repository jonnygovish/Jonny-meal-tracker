import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FoodComponent }   from './food.component';
import { NewFoodComponent} from './new-food.component'
import { FormsModule }   from '@angular/forms';
import { Food } from './food.model';
import { MealListComponent} from './meal-list.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
  ],
  declarations: [ 
    FoodComponent,
    NewFoodComponent,
    MealListComponent,
    
  ],
  bootstrap:    [ FoodComponent ]
})

export class FoodModule { }