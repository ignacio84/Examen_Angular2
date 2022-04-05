import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { platilloInterface } from 'src/app/interfaces/platillo.interface';
import { MealService } from 'src/app/services/meal.service';

@Component({
  selector: 'app-ingre-populares',
  templateUrl: './ingre-populares.component.html',
  styleUrls: ['./ingre-populares.component.css']
})
export class IngrePopularesComponent implements OnDestroy {

  public listIngr!:platilloInterface[];
  public ingreSub$!: Subscription;
  public displayedColumns: string[] = ['position', 'ingr', 'desc','platillos'];

  constructor(private mealService:MealService, public router: Router) { 
    this.ingreSub$=mealService.getIngredients().subscribe(
      resp =>
      {
        this.listIngr=resp
      }
      , err => console.log
    );
  }
  ngOnDestroy(): void {
    this.ingreSub$.unsubscribe();
  }

}
