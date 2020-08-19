import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Bar } from '../models/bar.model';

@Injectable({
  providedIn: 'root'
})
export class BarService {

  readonly baseURL="http://localhost:8080/";

  constructor(private http: HttpClient) { }

  public getPubs(): Observable<Bar[]>{
    return this.http.get<Bar[]>(this.baseURL + "getPubs");
  }
  
  public addPubs(newBar: Bar) {
    return this.http.post<Bar>(this.baseURL + "add", newBar);
  }

  /*public deletePubs(bar: Bar){
    return this.http.post<Bar>(this.baseURL + "delete", bar);
  }*/

  deletePubs(id: number): Observable<any> {  
    return this.http.delete(this.baseURL + "delete/"+ id);  
  }  

}
