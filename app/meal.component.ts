import{ Meal } from './meal.model';
import { Component } from 'angular2/core';

@Component({
    selector: 'meal-display',
    inputs: ['meal'],
  template: `
    <h3>{{ meal.name }} </h3>
    <p>{{meal.details}}</p>
    <p>Calories: {{meal.calories}}</p>
  `
})
export class MealComponent {
  public meal: Meal;
}
