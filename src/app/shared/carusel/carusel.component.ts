import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { platilloInterface } from 'src/app/interfaces/platillo.interface';
import { PlatillosComponent } from 'src/app/pages/platillos/platillos.component';

@Component({
  selector: 'app-carusel',
  templateUrl: './carusel.component.html',
  styleUrls: ['./carusel.component.css']
})
export class CaruselComponent implements OnInit, OnDestroy{

  @Input('listMeal') public listMeal!:platilloInterface[];
  public mealShow!:platilloInterface;
  public index=0;
  public timer=300000;//milisegndos
  public subsTimer$!:Subscription;

  constructor() { 
  }
  ngOnDestroy(): void {
    this.subsTimer$?.unsubscribe();
  }

  ngOnInit(): void {
    this.selectedMeal();
    this.startTimer();
  }

  startTimer(){
    this.subsTimer$ = interval(this.timer).subscribe((resp: any) => {
      console.log(resp);
      this.next();
    })
  }

  next(){
    if(this.index==4){
      this.index=0;
      return;
    }
    this.index++;
    this.selectedMeal();
  }

  back(){
    if(this.index==0){
      this.index=4;
      return;
    }
    this.index--;
    this.selectedMeal();
  }

  selectedMeal(){
    this.mealShow={...this.listMeal[this.index]};
  }


}
