import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { forkJoin, Observer, Subscription } from 'rxjs';
import { platilloInterface } from 'src/app/interfaces/platillo.interface';
import { MealService } from 'src/app/services/meal.service';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';

@Component({
  selector: 'app-platillos',
  templateUrl: './platillos.component.html',
  styleUrls: ['./platillos.component.css']
})
export class PlatillosComponent implements OnDestroy {

  public listArea!:platilloInterface[];
  public listIngr!:platilloInterface[];
  public listCat!:platilloInterface[];
  public listMeals!:platilloInterface[];
  private subMeals$!:Subscription;
  private subs$!:Subscription;
  public displayedColumns: string[] = ['img', 'position', 'ingr', 'platillos'];

  public buscarForm: FormGroup = this.fb.group({
    area: ['', []],
    ingrediente: ['',[]],
    categoria: ['',[]],
  }
  , {
    validators: [this.onlyOneValueValidator()]
  });

  constructor(private mealService: MealService, private fb: FormBuilder,public dialog: MatDialog) {
    //multiples request en paralelo
   this.subs$= forkJoin({
      a:this.mealService.getList('a'),
      i:this.mealService.getList('i'),
      c:this.mealService.getList('c'),
    })
    .subscribe(({a, i, c}) => {
      this.listArea = a;
      this.listIngr = i;
      this.listCat = c;
    }
      , err => console.log);
  }

  ngOnDestroy(): void {
    this.subs$.unsubscribe();
    this.subMeals$?.unsubscribe();
  }

  openDialog(msj:string) {
    this.dialog.open(DialogComponent, {
      data: {
        tipo: 1,//OK=1, ERRO=2 
        titulo:'Error',
        mensaje: msj
      },
    });
  }

  onSubmit(){
    let type='';
    let term='';
    if(this.buscarForm.invalid){
      this.buscarForm.reset();
      if(this.buscarForm.get('categoria')?.errors){
        this.openDialog('Solo se permite un parametro de busqueda.');
        return;
      }
        this.openDialog('Favor de ingresar parametro de busqueda.');
        return;
    }
    if(this.buscarForm.get('area')?.value)
    {
      type='a';
      term=this.buscarForm.get('area')?.value;
    }
    if(this.buscarForm.get('ingrediente')?.value)
    {
      type='i';
      term=this.buscarForm.get('ingrediente')?.value;
    }
    if(this.buscarForm.get('categoria')?.value)
    {
      type='c';
      term=this.buscarForm.get('categoria')?.value;
    }
    this.subMeals$=this.mealService.getListFilterMeal(type,term)
    .subscribe(resp=>{
      this.listMeals=resp;
    });
    this.buscarForm.reset();
  }

  //validador de formulario perzonalizado
    onlyOneValueValidator() {
      return (formGroup: FormGroup) => {
        let cont=0;
        if(formGroup.get('ingrediente')?.value){
          cont++;
        }
        if(formGroup.get('area')?.value){
          cont++;
        }
        if(formGroup.get('categoria')?.value){
          cont++;
        }
        if (cont === 1) {
          formGroup.get('ingrediente')!.setErrors(null);//cuando no hay error
          formGroup.get('categoria')!.setErrors(null);//cuando existe el error
        } else if(cont===0) {
          formGroup.get('ingrediente')!.setErrors({ faltaParamatro: true });//cuando existe el error
        }else{
          formGroup.get('categoria')!.setErrors({ soloUnParmatro: true });//cuando existe el error
        }
        cont=0;
      }
    }
}
