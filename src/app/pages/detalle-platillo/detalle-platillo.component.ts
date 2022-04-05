import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { platilloInterface } from 'src/app/interfaces/platillo.interface';
import { MealService } from 'src/app/services/meal.service';


@Component({
  selector: 'app-detalle-platillo',
  templateUrl: './detalle-platillo.component.html',
  styleUrls: ['./detalle-platillo.component.css']
})

export class DetallePlatilloComponent implements OnDestroy {

  public platillo!:platilloInterface;
  public mealSub$!: Subscription;

  constructor(private mealService:MealService,
    private activeRoute:ActivatedRoute) {
    const idMeal= this.activeRoute.snapshot.paramMap.get('idMeal');
    const id= Number(idMeal);
    this.mealSub$=this.mealService.getMealById(id).subscribe(
      resp =>
      {
         this.platillo = resp;
         console.log(this.platillo);
      }, 
      err => console.log
    );
   }
   
  ngOnDestroy(): void {
    this.mealSub$.unsubscribe();
  }

}
