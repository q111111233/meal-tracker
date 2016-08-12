import {Pipe, PipeTransform} from 'angular2/core';
import {Meal} from './meal.model';

@Pipe({
  name: "aboveFiveHundred",
  pure: false
})
export class HighCaloriesPipe implements PipeTransform {
  transform = function(input: Meal[], info) {
    var desiredCalories = info[0];
    var output: Meal[] = [];
    if(desiredCalories === "above500"){
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories > 500) {
          output.push(input[i]);
        }
      }
      return output;
    }else if(desiredCalories === "below500"){
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories < 500) {
          output.push(input[i]);
        }
      }
      return output;
    }else{
      return input;
    }
  }
}
