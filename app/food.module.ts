import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FoodComponent }   from './food.component';


@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [ 
    FoodComponent,
    
  ],
  bootstrap:    [ FoodComponent ]
})

export class FoodModule { }