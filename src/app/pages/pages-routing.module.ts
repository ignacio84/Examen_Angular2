import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { DetallePlatilloComponent } from './detalle-platillo/detalle-platillo.component';
import { HomeComponent } from './home/home.component';
import { IngrePlatillosComponent } from './ingre-platillos/ingre-platillos.component';
import { IngrePopularesComponent } from './ingre-populares/ingre-populares.component';
import { PagesComponent } from './pages.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { PlatillosComponent } from './platillos/platillos.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    canActivate: [AuthGuard],
    children:[
      { path: 'home', component: HomeComponent, data: { titulo: 'Bienvenido' } },
      { path: 'platillo', component: PlatillosComponent, data: { titulo: 'Platillo' } },
      { path: 'perfil-usr', component: PerfilUsuarioComponent, data: { titulo: 'Perfil Del Usuario' } },
      { path: 'ingr-popu', component: IngrePopularesComponent, data: { titulo: 'Ingredintes Populares' } },
      { path: 'ingr-plat/:strIngredient', component: IngrePlatillosComponent, data: { titulo: 'Platillo Ingredinte' } },
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
