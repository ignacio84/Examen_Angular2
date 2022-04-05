import { Component, OnDestroy, OnInit } from '@angular/core';
import { forkJoin, Subscription } from 'rxjs';
import { platilloInterface } from 'src/app/interfaces/platillo.interface';
import { MealService } from 'src/app/services/meal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy {

  public platillo!:platilloInterface;
  public modal: boolean = false;
  public mealSub$!: Subscription;
  public mealCaruselSub$!: Subscription;
  public listMealsCarousel!:platilloInterface[];

  constructor(private mealService:MealService) { 
    this.mealSub$= forkJoin({
      c0:this.mealService.getMealRandom(),
      c1:this.mealService.getMealRandom(),
      c2:this.mealService.getMealRandom(),
      c3:this.mealService.getMealRandom(),
      c4:this.mealService.getMealRandom(),
      c5:this.mealService.getMealRandom(),
    })
    .subscribe(({c0, c1,c2,c3,c4,c5}) => {
      this.listMealsCarousel=[];
      this.platillo=c0;
      this.listMealsCarousel.push(c1);
      this.listMealsCarousel.push(c2);
      this.listMealsCarousel.push(c3);
      this.listMealsCarousel.push(c4);
      this.listMealsCarousel.push(c5);
      this.modal=(this.platillo)?true :false;
    }
      , err => console.log);
  }

  ngOnDestroy(): void {
    this.mealSub$.unsubscribe();
  }

  setModal(modal:boolean){
    console.log('setModal', modal);
  }
}
