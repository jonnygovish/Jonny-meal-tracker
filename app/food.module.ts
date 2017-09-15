import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FoodComponent }   from './food.component';
import { NewFoodComponent} from './new-food.component'
import { Food } from './food.model';


@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [ 
    FoodComponent,
    NewFoodComponent,
    
  ],
  bootstrap:    [ FoodComponent ]
})

export class FoodModule { }