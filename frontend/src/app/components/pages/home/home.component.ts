import { Component, OnInit } from '@angular/core';
import { Food } from '../../../shared/models/food';
import { FoodService } from '../../../services/food.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  foods: Food[] = [];

  constructor(
    private foodService: FoodService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    ) {}

  ngOnInit() {
   this.activateRoute.params.subscribe(params => {
    if(params['searchTerm']) {
      this.foods = this.foodService.getFoodBySearchTerm(params['searchTerm'])
    } else {
      this.foods = this.foodService.getAllFood();
    }
   })

   this.activateRoute.params.subscribe(params => {
    if(params['tag']) {
      this.foods = this.foodService.getFoodByTag(params['tag'])
    } else {
      this.foods = this.foodService.getAllFood();
    }
   })
  }

  findByTag(tag: string) {
    this.router.navigateByUrl('/tag/' + tag)
  }
}
