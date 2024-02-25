import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-foodlist-page',
  templateUrl: './foodlist-page.component.html',
  styleUrls: ['./foodlist-page.component.scss']
})
export class FoodlistPageComponent implements OnInit{

  foods: Food[] = [];
  constructor(private foodService: FoodService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      console.log("Params : ",params)
      if (params['searchTerm']){
        this.foods = this.foodService.getAllFoodsBySearchTerm(params['searchTerm']);
      }
      else if (params['tag']){
        this.foods = this.foodService.getAllFoodsByTag(params['tag']);
      }
      else{
        this.foods = this.foodService.getAll();
      }
        
    })
  }

}
