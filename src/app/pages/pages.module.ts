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
import { IngrePopularesComponent } from './ingre-populares/ingre-populares.component';
import { IngrePlatillosComponent } from './ingre-platillos/ingre-platillos.component';
import { PlatillosComponent } from './platillos/platillos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';

@NgModule({
  declarations: [
    AleatorioModalComponent,
    HomeComponent,
    PagesComponent,
    DetallePlatilloComponent,
    UrlSafePipe,
    IngrePopularesComponent,
    IngrePlatillosComponent,
    PlatillosComponent,
    PerfilUsuarioComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    PagesRoutingModule,
    SharedModule,
  ]
})
export class PagesModule { }
