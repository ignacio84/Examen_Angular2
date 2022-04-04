import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { platilloInterface } from 'src/app/interfaces/platillo.interface';

@Component({
  selector: 'app-aleatorio-modal',
  templateUrl: './aleatorio-modal.component.html',
  styleUrls: ['./aleatorio-modal.component.css']
})
export class AleatorioModalComponent implements OnInit {

  @Input() public platillo!:platilloInterface;
  @Output() modal: EventEmitter<boolean> = new EventEmitter();

  constructor( public router: Router) { }

  ngOnInit(): void {
  }

  cerrar(){
    this.modal.emit(false);
  }
}
