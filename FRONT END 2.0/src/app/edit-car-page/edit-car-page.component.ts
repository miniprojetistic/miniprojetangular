import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Car } from '../types';
import { CarsService } from '../cars.service';


@Component({
  selector: 'app-edit-car-page',
  templateUrl: './edit-car-page.component.html',
  styleUrls: ['./edit-car-page.component.css']
})
export class EditCarPageComponent implements OnInit {

  car: Car ;

  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private carsService : CarsService,
  ) {}

  ngOnInit() : void{
    const id = this.route.snapshot.paramMap.get("id")!;
    this.carsService.getCarsById(id)
    .subscribe(car => this.car = car);
  }
  

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
    this.carsService.editCar(this.car.id, phoneNumber, location, mileage, price, model, color, type, brand, fuel, state, year,maxspeed, carimg).subscribe(()=>{
      this.router.navigateByUrl("/marketplace");
    });
    
  }
  
}
