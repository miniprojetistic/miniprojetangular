import { Injectable } from '@angular/core';
import { Car } from './types';
import { Observable } from 'rxjs';
import { HttpClient , HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(
    private http :HttpClient,
  ) { }


  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>("/api/cars");
  }

  getCarsById(id : string): Observable<Car> {
    return this.http.get<Car>(`/api/cars/${id}`);
  }

  deleteCar(id : string):Observable<any>{
    return this.http.delete(`/api/cars/${id}`);
  }

  createCar(phoneNumber : number,
    location : string,
    mileage :number,
    price : number,
    model : string,
    color : string,
    type : string,
    brand : string,
    fuel : string,
    state : string,
    year : number,
    maxspeed : number,
    carimg : string):Observable<Car>{
      return this.http.post<Car>('/api/cars',
      {phoneNumber, location, mileage, price, model, color, type, brand, fuel, state, year, maxspeed, carimg},
      httpOptions,);
  }

  editCar(id: string ,
    phoneNumber: number,
    location: string,
    mileage: number,
    price: number,
    model: string,
    color: string,
    type: string,
    brand: string,
    fuel: string,
    state: string,
    year: number,
    maxspeed: number,
    carimg: string): Observable<Car> {
      return this.http.post<Car>(`/api/cars/${id}`,
        { phoneNumber, location, mileage, price, model, color, type, brand, fuel, state, year, maxspeed, carimg },
        httpOptions,);
  }
    
}
