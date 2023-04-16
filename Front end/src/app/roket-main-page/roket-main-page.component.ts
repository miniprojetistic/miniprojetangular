import { Component, OnInit } from '@angular/core';
import { Car } from '../types';
import { fakeCars } from '../fakedata';

@Component({
  selector: 'app-roket-main-page',
  templateUrl: './roket-main-page.component.html',
  styleUrls: ['./roket-main-page.component.css']
})

export class RoketMainPageComponent implements OnInit {
  cars : Car[] = [];
  filter : Car[] = [];
  
  search : string = "";
  sorting : string = "";
  state : string = "";
  brand : string = "";
  type : string = "";
  model : string = "";
  priceFrom : string = "";
  priceTo : string = "";
  yearFrom : string ="";
  yearTo : string = "";
  mileage : string = "";
  fuel : string = "";

  constructor(){}

  ngOnInit(): void {
    this.cars = fakeCars;
  }
  onSubmit(){
    fakeCars.forEach(car => {
      if(this.verif(car)){
        this.filter.push(car);
      }
    })
    this.cars = this.filter;
    this.filter = [];
  }

  onSelectChange(){
    let temp = this.cars;
    if (this.sorting =="priceup"){ 
       this.cars = this.cars.sort((a,b)=> a.price-b.price);
    }
    else if(this.sorting == "pricedown"){
      this.cars = this.cars.sort((a,b)=> b.price-a.price);
    }
    else if(this.sorting ==""){
      this.cars = temp;
    }
  }

  searchFunction() : void{
    if(this.search !=""){
      this.cars=  this.cars.filter(car => car.model.toLowerCase().includes(this.search.toLowerCase()));
    }
  }


  verif(car : Car): boolean {
    if(this.state!=""){
      if(this.state.toLowerCase()!==car.state){
        return(false);
      }
    }
    if(this.type!=""){
      if(this.type.toLowerCase()!==car.type){
        return(false);
      }
    }
    if(this.brand!=""){
      if(this.brand.toLowerCase()!==car.brand){
        return(false);
      }
    }
    if(this.model!=""){
      if(this.model.toLowerCase()!==car.model){
        return(false);
      }
    }
    if(this.priceFrom!=""){
      if(Number(this.priceFrom)>car.price){
        return(false);
      }
    }
    if(this.priceTo!=""){
      if(Number(this.priceTo)<car.price){
        return(false);
      }
    }
    if(this.yearFrom!=""){
      if(Number(this.yearFrom)>car.year){
        return(false);
      }
    }
    if(this.yearTo!=""){
      if(Number(this.yearTo)<car.year){
        return(false);
      }
    }
    if(this.mileage!=""){
      if(Number(this.mileage)<car.mileage){
        return(false);
      }
    }
    if(this.fuel!=""){
      if(this.fuel.toLowerCase()!==car.fuel){
        return(false);
      }
    }
    return(true);
  }

}
