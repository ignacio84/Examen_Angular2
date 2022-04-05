import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { DialogComponent } from './dialog/dialog.component';
import { MaterialModule } from '../material/material.module';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { TableMealsComponent } from './table-meals/table-meals.component';
import { CaruselComponent } from './carusel/carusel.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    DialogComponent,
    BottomSheetComponent,
    NavbarComponent,
    TableMealsComponent,
    CaruselComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports:[
    NotFoundComponent,
    DialogComponent,
    NavbarComponent,
    CaruselComponent,
    TableMealsComponent
  ]
})
export class SharedModule { }
