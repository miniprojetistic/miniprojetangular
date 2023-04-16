import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fakeCars } from '../fakedata';
import { Car } from '../types';

@Component({
  selector: 'app-roket-cardetails-page',
  templateUrl: './roket-cardetails-page.component.html',
  styleUrls: ['./roket-cardetails-page.component.css']
})
export class RoketCardetailsPageComponent implements OnInit {
  
  car: Car | undefined;
  
  constructor(
    private route : ActivatedRoute,
    ){
    }

    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get("id");
        this.car = fakeCars.find(car => car.id === id);     
    }
}
