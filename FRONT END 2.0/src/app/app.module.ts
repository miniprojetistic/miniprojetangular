import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoketMainPageComponent } from './roket-main-page/roket-main-page.component';
import { RoketCardetailsPageComponent } from './roket-cardetails-page/roket-cardetails-page.component';
import { RoketAddcarPageComponent } from './roket-addcar-page/roket-addcar-page.component';
import { FormsModule } from '@angular/forms';
import { RoketCarDataFormComponent } from './roket-car-data-form/roket-car-data-form.component';
import { EditCarPageComponent } from './edit-car-page/edit-car-page.component';
import {HttpClientModule} from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    RoketMainPageComponent,
    RoketCardetailsPageComponent,
    RoketAddcarPageComponent,
    RoketCarDataFormComponent,
    EditCarPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
