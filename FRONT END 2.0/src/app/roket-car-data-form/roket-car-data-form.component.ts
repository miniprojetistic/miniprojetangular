import { Component,OnInit, Input ,Output,EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { Car } from '../types';


@Component({
  selector: 'app-roket-car-data-form',
  templateUrl: './roket-car-data-form.component.html',
  styleUrls: ['./roket-car-data-form.component.css']
})
export class RoketCarDataFormComponent implements OnInit {
 
  @Input() buttonText: any;
  @Input() currentphoneNumber : any ;
  @Input() currentlocation : any;
  @Input() currentmileage : any ;
  @Input() currentprice : any;
  @Input() currentmodel : any;
  @Input() currentcolor : any;
  @Input() currenttype : any;
  @Input() currentbrand : any;
  @Input() currentfuel : any;
  @Input() currentstate : any;
  @Input() currentyear : any;
  @Input() currentmaxspeed : any;
  @Input() currentcarimg : any;



  phoneNumber : string = "";
  location : string = "";
  mileage :string = "";
  price : string = "";
  model : string = "";
  color : string = "";
  type : string = "";
  brand : string = "";
  fuel : string = "";
  state : string = "";
  year : string = "";
  maxspeed : string = "";
  carimg : string = "";

  @Output() onSubmit = new EventEmitter<Car>();

  constructor(
    private router: Router,
  ){}

    ngOnInit(): void {
      this.phoneNumber=this.currentphoneNumber;
      this.location=this.currentlocation;
      this.mileage=this.currentmileage;
      this.price=this.currentprice;
      this.model=this.currentmodel;
      this.color=this.currentcolor;
      this.type=this.currenttype;
      this.brand=this.currentbrand;
      this.fuel=this.currentfuel;
      this.state=this.currentstate;
      this.year=this.currentyear;
      this.maxspeed=this.currentmaxspeed;
      this.carimg=this.currentcarimg;
    }


  onButtonClicked(): void{
    console.log(this.carimg)
    this.onSubmit.emit({
      id: "",
      phoneNumber : Number(this.phoneNumber),
      location : this.location,
      mileage :Number(this.mileage),
      price : Number(this.price),
      model : this.model,
      color : this.color,
      type : this.type,
      brand : this.brand,
      fuel : this.fuel,
      state : this.state,
      year : Number(this.year),
      maxspeed : Number(this.maxspeed),
      carimg : this.carimg,

    })
  }
}
