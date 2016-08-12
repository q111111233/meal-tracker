import{ Component, EventEmitter } from 'angular2/core';
import{ Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs:['onSubmitNewMeal'],
  template:`
  <div class="meal-form col-sm-8">
    <h3>Create Meal:</h3>
    <input placeholder="name" class="col-sm-8 input-lg" #newName>
    <input placeholder="details" class="col-sm-8 input-lg" #newDetails>
    <input placeholder="calories" class="col-sm-8 input-lg" #newCalories>
    <button (click)="addMeal(newName, newDetails, newCalories)" class="btn-success btn-lg add-button">Add</button>
  </div>
  `
})

export class NewMealComponent{
  public onSubmitNewMeal: EventEmitter<Object>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(userName: HTMLInputElement, userDetails: HTMLInputElement, userCalories: HTMLInputElement){
    this.onSubmitNewMeal.emit({
      name:userName.value,
      details:userDetails.value,
      calories:parseInt(userCalories.value)
    });
    userName.value = "";
    userDetails.value = "";
    userCalories.value = "";
  }
}
