import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { DialogComponent } from './dialog/dialog.component';
import { MaterialModule } from '../material/material.module';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    DialogComponent,
    BottomSheetComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    NotFoundComponent,
    DialogComponent,
    NavbarComponent,
  ]
})
export class SharedModule { }
