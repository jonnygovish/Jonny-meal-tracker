import { Component } from '@angular/core';

@Component({
  selector: 'food',
  template: `
  <new-food></new-food>
  `
})

export class FoodComponent {
  
}
export class Food{
  constructor(public name: string, public details: string, public calories: number) { }
}