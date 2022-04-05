import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'; 
// import {MatBottomSheetModule} from '@angular/material/bottom-sheet'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import {MatChipsModule} from '@angular/material/chips'; 
import {MatDialogModule} from '@angular/material/dialog'; 
import {MatDividerModule} from '@angular/material/divider'; 
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatListModule} from '@angular/material/list'; 
import {MatTableModule} from '@angular/material/table'; 
import {MatToolbarModule } from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu'; 
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select'; 


@NgModule({
  exports: [
    MatButtonModule,
    // MatBottomSheetModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDialogModule,
    MatDividerModule,
    MatGridListModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatSelectModule
  ]
})

export class MaterialModule { }