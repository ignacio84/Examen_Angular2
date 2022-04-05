import { Injectable } from '@angular/core';
import { MenuInterface } from '../interfaces/menu.interface.';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private readonly _menu: MenuInterface[]=[
    {
    titulo: 'Bienvenido',
    icono: 'usr',
    url: '/pages/home',
    // submenu:[
    //   {
    //     titulo: 'perfil',
    //     icono: 'perfil',
    //     url: '',
    //   },
    //   {
    //     titulo: 'Cerrar Sesion',
    //     icono: 'cerrar',
    //     url: '',
    //   }
    // ]
    },
    {
      titulo: 'Ingredientes Populares',
      icono: 'usr',
      url: '/pages/ingr-popu',
    },
    {
      titulo: 'Platillo',
      icono: 'usr',
      url: '/pages/platillo',
    },
    {
      titulo: 'Usuario',
      icono: 'usr',
      url: '',
      submenu:[
        {
          titulo: 'perfil',
          icono: 'perfil',
          url: '/pages/perfil-usr',
        },
        {
          titulo: 'Cerrar Sesion',
          icono: 'cerrar',
          method:'cerrarSesion()',
        }
      ]
    },
  ];

get menu(){
  return this._menu;
}
  
}
