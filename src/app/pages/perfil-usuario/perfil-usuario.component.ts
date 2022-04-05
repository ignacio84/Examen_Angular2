import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioInterface } from 'src/app/interfaces/usuario.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent{

  public usuario!:UsuarioInterface;

  constructor(private authService:AuthService, private router:Router) {
    this.usuario=authService.usr;
  }

  public logOut(){
      if(this.authService.logOut()){
       this.router.navigate(['..']);
   }
  }
}
