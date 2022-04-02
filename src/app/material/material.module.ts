import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'; 
// import {MatBottomSheetModule} from '@angular/material/bottom-sheet'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import {MatDialogModule} from '@angular/material/dialog'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatListModule} from '@angular/material/list'; 
import {MatMenuModule} from '@angular/material/menu'; 
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  exports: [
    MatButtonModule,
    // MatBottomSheetModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatMenuModule
  ]
})

export class MaterialModule { }
