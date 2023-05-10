import { Component, OnInit } from '@angular/core';
import { Car } from '../types';
import { CarsService } from '../cars.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roket-main-page',
  templateUrl: './roket-main-page.component.html',
  styleUrls: ['./roket-main-page.component.css']
})
export class RoketMainPageComponent implements OnInit {
  cars: Car[] = [];
  filteredCars: Car[] = [];

  search: string = '';
  sorting: string = '';
  state: string = '';
  brand: string = '';
  type: string = '';
  model: string = '';
  priceFrom: string = '';
  priceTo: string = '';
  yearFrom: string = '';
  yearTo: string = '';
  mileage: string = '';
  fuel: string = '';

  constructor(
    private carsService: CarsService,
    private router: Router,
    ){}

  ngOnInit(): void {
    this.carsService.getCars().subscribe((cars) => {
      this.cars = cars;
    });
  }

  OnDeleteClicked(carId: string):void{
    this.carsService.deleteCar(carId)
    .subscribe(()=>{
      this.cars = this.cars.filter(
        car => car.id !== carId
      );
    })
    alert("Deleting the car....");
    this.router.navigateByUrl("/marketplace");

  }


  onSubmit(): void {
    this.filteredCars = this.cars.filter((car) => this.verif(car));
    this.cars = this.filteredCars;
    this.filteredCars = [];
  }

  onSelectChange(): void {
    let temp = [...this.cars];
    if (this.sorting === 'priceup') {
      this.cars = temp.sort((a, b) => a.price - b.price);
    } else if (this.sorting === 'pricedown') {
      this.cars = temp.sort((a, b) => b.price - a.price);
    } else if (this.sorting === '') {
      this.cars = temp;
    }
  }

  searchFunction(): void {
    if (this.search !== '') {
      this.filteredCars = this.cars.filter((car) =>
        car.model.toLowerCase().includes(this.search.toLowerCase())
      );
      this.cars = this.filteredCars;
      this.filteredCars = [];
    }
  }

  verif(car: Car): boolean {
    if (this.state !== '' && this.state.toLowerCase() !== car.state) {
      return false;
    }
    if (this.type !== '' && this.type.toLowerCase() !== car.type) {
      return false;
    }
    if (this.brand !== '' && this.brand.toLowerCase() !== car.brand) {
      return false;
    }
    if (this.model !== '' && this.model.toLowerCase() !== car.model) {
      return false;
    }
    if (this.priceFrom !== '' && Number(this.priceFrom) > car.price) {
      return false;
    }
    if (this.priceTo !== '' && Number(this.priceTo) < car.price) {
      return false;
    }
    if (this.yearFrom !== '' && Number(this.yearFrom) > car.year) {
      return false;
    }
    if (this.yearTo !== '' && Number(this.yearTo) < car.year) {
      return false;
    }
    if (this.mileage !== '' && Number(this.mileage) < car.mileage) {
      return false;
    }
    if (this.fuel !== '' && this.fuel.toLowerCase() !== car.fuel) {
      return false;
    }
    return true;
  }
}
