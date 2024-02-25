import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-fooditems',
  templateUrl: './fooditems.component.html',
  styleUrls: ['./fooditems.component.scss']
})
export class FooditemsComponent {
  @Input() foods!: Food[];

  constructor(private foodService: FoodService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    console.log("Inside fooditems OnInit")
    this.activatedRoute.params.subscribe((params) => {
      console.log("Params : ",params)
      if (params['searchTerm']){
        console.log("Inside searchTerm : ",params['searchTerm'])
        this.foods = this.foodService.getAllFoodsBySearchTerm(params['searchTerm']);
      }
      else if (params['tag']){
        console.log("Inside tag : ",params['tag'])
        this.foods = this.foodService.getAllFoodsByTag(params['tag']);
      }
      else{
        console.log("Inside Else: ")
        this.foods = this.foodService.getAll();
      }
        
    })
  }
}
