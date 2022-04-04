import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { PagesRoutingModule } from './pages-routing.module';

import { HomeComponent } from './home/home.component'
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { AleatorioModalComponent } from './home/aleatorio-modal/aleatorio-modal.component';
import { DetallePlatilloComponent } from './detalle-platillo/detalle-platillo.component';
import { UrlSafePipe } from '../pipes/url-safe.pipe';



@NgModule({
  declarations: [
    AleatorioModalComponent,
    HomeComponent,
    PagesComponent,
    DetallePlatilloComponent,
    UrlSafePipe,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PagesRoutingModule,
    SharedModule,
  ]
})
export class PagesModule { }
