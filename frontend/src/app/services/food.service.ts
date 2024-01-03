import { Injectable } from '@angular/core';
import { sample_foods } from '../../data';
import { Food } from '../shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAllFood():Food[] {
    return sample_foods
  }

  getFoodBySearchTerm(searchTerm: string) {
   return this.getAllFood().filter(food => food.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
  }
}
