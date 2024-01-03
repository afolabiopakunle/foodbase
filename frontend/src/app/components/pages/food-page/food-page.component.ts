import { Component, OnInit } from '@angular/core';
import { Food } from '../../../shared/models/food';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../../../services/food.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent implements OnInit {

  food!: Food;

  constructor(
    private activatedRoute: ActivatedRoute,
    private foodService: FoodService,
    ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params['id']) {
        this.food = this.foodService.getFood(params['id'])
      }
    })
    
  }
}
