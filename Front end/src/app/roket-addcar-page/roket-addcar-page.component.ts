import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-roket-addcar-page',
  templateUrl: './roket-addcar-page.component.html',
  styleUrls: ['./roket-addcar-page.component.css']
})
export class RoketAddcarPageComponent {
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

  constructor(
    private router: Router,
  ){}

  onSubmit(): void{
    alert("Creating a new car for sale...");
    this.router.navigateByUrl("/marketplace");
  }
}
