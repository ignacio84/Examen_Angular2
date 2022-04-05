import { LowerCasePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UsuarioInterface } from '../interfaces/usuario.interface';

const USR_STORAGE = 'AHFADF1';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuario: UsuarioInterface={
    usuario: 'user',
    password: 'root',
    recordar: false,
    nombre:'Ignacio',
    apellido:'Castro',
    email:'ignacio.cm84@gmail.com',
    img:'/assets/img/photo.jpg',
    fechaNac:new Date(),
    rol:'ADMIN',
    ocupacion:'Empleado ',
    comentario:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, rerum eveniet pariatur deserunt temporibus et, praesentium perferendis, quis officia molestiae delectus doloremque officiis culpa? Placeat molestiae asperiores eligendi accusantium omnis.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus incidunt velit, quas officia, dolorem aut expedita consectetur fugiat sequi repellat voluptas quos doloremque officiis itaque? Placeat hic ipsa aliquam neque.'
};

  login(loginInter:UsuarioInterface):boolean{
   if(this.usuario.usuario===loginInter.usuario && this.usuario.password===loginInter.password){
    let usr={...this.usuario};
    delete usr.password;
     sessionStorage.setItem(USR_STORAGE, JSON.stringify(usr));
        if(loginInter.recordar){
          localStorage.setItem(USR_STORAGE, JSON.stringify(usr));
        }else{
          localStorage.removeItem(USR_STORAGE);
     }; 
     return true;
   }
    return false;
  }

  logOut():boolean{
    sessionStorage.clear();
    localStorage.clear();
    return (this.userSessionStorage || this.userLocalStorage) ? false : true;
  }

  get userSessionStorage(){
    const user=sessionStorage.getItem(USR_STORAGE);
    return user?JSON.parse(user):null;
  }

  get userLocalStorage():UsuarioInterface {
    const user=localStorage.getItem(USR_STORAGE);
    return user?JSON.parse(user):null;
  }

  get usr():UsuarioInterface{
    return this.userSessionStorage?this.userSessionStorage:this.userSessionStorage;
  }

}
