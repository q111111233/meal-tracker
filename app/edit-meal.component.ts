import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  inputs: ['meal'],
  template:`
    <div class="meal-form col-sm-8">
      <h3>Edit meal details</h3>
      <input [(ngModel)]="meal.name" class="col-sm-8 input-lg task-form"/>
      <input [(ngModel)]="meal.details" class="col-sm-8 input-lg task-form"/>
      <input [(ngModel)]="meal.calories" class="col-sm-8 input-lg task-form"/>
    </div>
  `
})

export class EditMealComponent{
  public meal: Meal;
}
