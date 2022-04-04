
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
  // www.themealdb.com/api/json/v1/1/lookup.php?i=52772
}
