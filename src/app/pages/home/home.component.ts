import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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

  constructor(private mealService:MealService) { 
    this.mealSub$=this.mealService.getMealRandom().subscribe(
      resp =>
      {
        this.platillo=resp
        this.modal=(this.platillo)?true :false;
        }
      , err => console.log
    );
  }
  ngOnDestroy(): void {
    this.mealSub$.unsubscribe();
  }

  setModal(modal:boolean){
    console.log('setModal', modal);
  }
}
