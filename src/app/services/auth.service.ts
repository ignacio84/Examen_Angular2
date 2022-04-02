import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UsuarioInterface } from '../interfaces/usuario-form.interface';


const USR_STORAGE = 'AHFADF1';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly usuario: UsuarioInterface={
    usuario: 'user',
    password: 'root',
    recordar: false,
    nombre:'Ignacio',
    apellido:'Castro',
    email:'ignacio.cm84@gmail.com'
};

  login(loginInter:UsuarioInterface):boolean{
   if(this.usuario.usuario===loginInter.usuario && this.usuario.password===loginInter.password){
     delete this.usuario.password;
     sessionStorage.setItem(USR_STORAGE, JSON.stringify(this.usuario));
        if(loginInter.recordar){
          localStorage.setItem(USR_STORAGE, JSON.stringify(this.usuario));
        }else{
          localStorage.removeItem(USR_STORAGE);
     }; 
     return true;
   }
    return false;
  }

  logOut(){
    sessionStorage.clear();
    localStorage.clear();
  }

  get userSessionStorage(){
    const user=sessionStorage.getItem(USR_STORAGE);
    return user?JSON.parse(user):null;
  }

  get userLocalStorage():UsuarioInterface {
    const user=localStorage.getItem(USR_STORAGE);
    return user?JSON.parse(user):null;
  }
}
