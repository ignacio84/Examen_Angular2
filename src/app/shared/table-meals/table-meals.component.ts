import { Component, Input, OnInit } from '@angular/core';
import { platilloInterface } from 'src/app/interfaces/platillo.interface';

@Component({
  selector: 'app-table-meals',
  templateUrl: './table-meals.component.html',
  styleUrls: ['./table-meals.component.css']
})
export class TableMealsComponent implements OnInit {

  @Input('listMeals') public listMeals!:platilloInterface[];
  public displayedColumns: string[] = ['img', 'position', 'ingr', 'platillos'];

  constructor() { }

  ngOnInit(): void {
  }

}
