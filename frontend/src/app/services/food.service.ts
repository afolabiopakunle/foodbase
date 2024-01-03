import { Injectable } from '@angular/core';
import { sample_foods, sample_tags } from '../../data';
import { Food } from '../shared/models/food';
import { Tag } from '../shared/models/tag';

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

  getFoodById(foodId: string): Food {
    return this.getAllFood().find(food => food.id === foodId) ?? new Food;
  }

  getAllTags(): Tag[] {
    return sample_tags
  }

  getFood(id: string): Food {
    return this.getAllFood().find(food => food.id === id) ?? new Food
  }

  getFoodByTag(tag: string): Food[] {
    return tag === 'all' ? this.getAllFood() : this.getAllFood().filter(food => food.tags?.map(tag => tag.toLocaleLowerCase())?.includes(tag.toLocaleLowerCase()))
  }
}
