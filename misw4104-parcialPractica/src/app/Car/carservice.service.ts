import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from "./models/model.car"

@Injectable({
  providedIn: 'root'
})
export class CarserviceService {

private apiUrl = 'https://gist.githubusercontent.com/josejbocanegra/17bb8c76405e43655d551a90800c8a81/raw/d41b4acc3457e51e7533fad6d5e9925ee9676457/202212_MISW4104_Grupo1.json';

constructor(private http: HttpClient) { }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl);
  }

}
