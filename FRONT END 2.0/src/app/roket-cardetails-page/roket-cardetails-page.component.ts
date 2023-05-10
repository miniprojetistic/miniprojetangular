import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { CarsService } from '../cars.service';
import { Car } from '../types';

@Component({
  selector: 'app-roket-cardetails-page',
  templateUrl: './roket-cardetails-page.component.html',
  styleUrls: ['./roket-cardetails-page.component.css']
})
export class RoketCardetailsPageComponent implements OnInit {
  
  cars: Car | undefined;
  
  constructor(
    private carsService: CarsService,
    private route : ActivatedRoute,
    private router: Router,
    ){
    }

    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get("id");
      this.carsService.getCars().subscribe((cars) => {
        this.cars = cars.find(car => car.id === id );})    
    }

}
