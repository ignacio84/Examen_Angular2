import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { platilloInterface } from 'src/app/interfaces/platillo.interface';
import { MealService } from 'src/app/services/meal.service';

@Component({
  selector: 'app-ingre-platillos',
  templateUrl: './ingre-platillos.component.html',
  styleUrls: ['./ingre-platillos.component.css']
})
export class IngrePlatillosComponent{

  public listMeals!:platilloInterface[];
  public mealSub$!: Subscription;
  public displayedColumns: string[] = ['img', 'position', 'ingr', 'platillos'];

  constructor(private mealService: MealService, private activeRoute: ActivatedRoute) { 
    const ingre = this.activeRoute.snapshot.paramMap.get('strIngredient');
    mealService.getMealsByIngredient(ingre!).subscribe(
      (resp:any)=>{
        this.listMeals=resp
      }
      , err => console.log
    )
  }
}
