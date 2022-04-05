
import { HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const base_url = environment.url;

@Injectable({
  providedIn: 'root'
})
export class MealService {

  constructor(private http: HttpClient) { 
  }

  getMealRandom(): Observable<any>{
    return this.http.get(`${base_url}/random.php`)
    .pipe(
      map((data:any)=>{return data.meals[0]})
    );
  }  

  getMealById(id:number): Observable<any>{
    let params = new HttpParams();
    params = params.append('i', id);
    return this.http.get(`${base_url}/lookup.php`,{params})
    .pipe(
      map((data:any)=>{return data.meals[0]})
    );
  }  

  getIngredients(): Observable<any>{
    let params = new HttpParams();
    params = params.append('i', 'list');
    return this.http.get(`${base_url}/list.php`,{params})
    .pipe(
      map((data:any)=>data.meals)
    );
  } 

  getMealsByIngredient(strIngredient:string): Observable<any>{
    let params = new HttpParams();
    params = params.append('i', strIngredient);
    return this.http.get(`${base_url}/filter.php`,{params})
    .pipe(
      map((data:any)=>data.meals)
    );
  }  


  getList(type:'i' |'a'|'c'): Observable<any>{
    let params = new HttpParams();
    params = params.append(type, 'list');
    return this.http.get(`${base_url}/list.php`,{params})
    .pipe(
      map((data:any)=>data.meals)
    );
  } 

  getListFilterMeal(type:'i' |'a'|'c'| string, term:string): Observable<any>{
    let params = new HttpParams();
    params = params.append(type, term);
    return this.http.get(`${base_url}/filter.php`,{params})
    .pipe(
      map((data:any)=>data.meals)
    );
  } 


//   Filtrar por categoría www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
// Filtrar por área www.themealdb.com/api/json/v1/1/filter.php?a=Canadian
// Filtrar por ingrediente principal www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast
}
