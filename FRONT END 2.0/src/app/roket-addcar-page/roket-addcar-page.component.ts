import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarsService } from '../cars.service';
@Component({
  selector: 'app-roket-addcar-page',
  templateUrl: './roket-addcar-page.component.html',
  styleUrls: ['./roket-addcar-page.component.css']
})
export class RoketAddcarPageComponent {

  constructor(
    private router: Router,
    private carservice : CarsService,
  ){}

  onSubmit({ phoneNumber, location, mileage, price, model, color, type, brand, fuel, state, year, maxspeed, carimg }: {
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
    carimg: string
  }): void {
    this.carservice.createCar(phoneNumber, location, mileage, price, model, color, type, brand, fuel, state, year, maxspeed, carimg).subscribe(()=>{
      this.router.navigateByUrl("/marketplace"); 
      alert("Creating a new car for sale...");
    });
  }
}
