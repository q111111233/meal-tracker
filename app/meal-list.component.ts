import{ Meal } from './meal.model';
import{ Component, EventEmitter } from 'angular2/core';
import{ MealComponent } from './meal.component';
import{ EditMealComponent } from './edit-meal.component';
import{ NewMealComponent } from './new-meal.component';
import{ HighCaloriesPipe } from './high-calories.pip';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  pipes: [HighCaloriesPipe],
  directives: [MealComponent, EditMealComponent, NewMealComponent],
  template: `
  <select (change)="onChange($event.target.value)" class="filter">
    <option value="all">Show All</option>
    <option value="above500">Show food with calories above 500</option>
    <option value="below500" selected="selected">Show food with calories below 500</option>
  </select>

  <meal-display *ngFor="#currentMeal of mealList | aboveFiveHundred:selectedCalories"
    (click)="mealClicked(currentMeal)"
    [class.selected]="currentMeal === selectedMeal"
    [meal]="currentMeal">
  </meal-display>
  <edit-meal *ngIf="selectedMeal" [meal]="selectedMeal">
  </edit-meal>
  <new-meal (onSubmitNewMeal)="createMeal($event.name,$event.details,$event.calories)">
  </new-meal>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public selectedCalories: string = "all";
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    console.log('child', clickedMeal);
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  createMeal(name:string, details:string, calories:number):void{
    this.mealList.push(
      new Meal(name, details, calories, this.mealList.length)
    );
  }
  onChange(optionFromMenu) {
    this.selectedCalories = optionFromMenu;
    console.log(this.selectedCalories);
  }
}
