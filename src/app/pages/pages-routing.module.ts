import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallePlatilloComponent } from './detalle-platillo/detalle-platillo.component';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children:[
      { path: 'home', component: HomeComponent, data: { titulo: 'Bienvenido' } },
      { path: 'det-platillo/:idMeal', component: DetallePlatilloComponent, data: { titulo: 'Detalle' } },
      { path: '**', redirectTo: 'home' },
    ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
