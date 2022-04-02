import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from 'src/app/shared/bottom-sheet/bottom-sheet.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(){}

  // constructor(private _bottomSheet: MatBottomSheet) {}

  // openBottomSheet(): void {
  //   this._bottomSheet.open(BottomSheetComponent);
  // }

  ngOnInit(): void {
  }

}
