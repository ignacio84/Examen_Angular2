import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ValidationErrors } from '@angular/forms';
import { MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy{

  public loginForm: FormGroup = this.fb.group({
    usuario: [  this.authService.userLocalStorage?.usuario || '', [Validators.required, Validators.minLength(4)]],
    password: ['', [Validators.required]],
    recordar: [this.authService.userLocalStorage ? true : false, Validators.required]
  });

  constructor(private router: Router, private fb: FormBuilder,public dialog: MatDialog,private authService:AuthService) { }
  
  ngOnDestroy(): void {
    // this.loginForm.reset;
  }

  getError(name: string) {
    return (this.loginForm.controls[name].errors && this.loginForm.controls[name].touched);
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      data: {
        tipo: 1,//OK=1, ERRO=2 
        titulo:'Error',
        mensaje:'Error usuario y/o contraseña no validos.'
      },
    });
  }

  submit() {
    
    if(this.authService.login(this.loginForm.value)){
      //this.router.navigate(['/pages/home']);
      this.router.navigateByUrl('/pages/home');
      return;
    }  
    this.openDialog();
  }
}