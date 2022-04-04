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
    url: '',
    submenu:[
      {
        titulo: 'perfil',
        icono: 'perfil',
        url: '',
      },
      {
        titulo: 'Cerrar Sesion',
        icono: 'cerrar',
        url: '',
      }
    ]
    },
    {
      titulo: 'Ingredientes Populares',
      icono: 'usr',
      url: '',
    },
    {
      titulo: 'Platillo',
      icono: 'usr',
      url: '',
    },
    {
      titulo: 'Usuario',
      icono: 'usr',
      url: '',
      submenu:[
        {
          titulo: 'perfil',
          icono: 'perfil',
          url: '',
        },
        {
          titulo: 'Cerrar Sesion',
          icono: 'cerrar',
          url: '',
        }
      ]
    },
  ];

get menu(){
  return this._menu;
}
  
}
