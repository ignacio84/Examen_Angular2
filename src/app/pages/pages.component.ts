import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuInterface } from '../interfaces/menu.interface.';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-main',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {


  constructor(private router: Router) { 
  }

  ngOnInit(): void {
  }

}
