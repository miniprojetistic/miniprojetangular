import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoketAddcarPageComponent } from './roket-addcar-page/roket-addcar-page.component';
import { RoketCardetailsPageComponent } from './roket-cardetails-page/roket-cardetails-page.component';
import { RoketMainPageComponent } from './roket-main-page/roket-main-page.component';
import {EditCarPageComponent} from './edit-car-page/edit-car-page.component';

const routes: Routes = [
  { path: '',redirectTo:'/marketplace', pathMatch:'full'},
  { path: 'marketplace',component: RoketMainPageComponent , pathMatch:'full'},
  { path: 'marketplace/:id',component: RoketCardetailsPageComponent , pathMatch:'full'},
  { path: 'addcar',component: RoketAddcarPageComponent , pathMatch:'full'},
  {path : 'editcar/:id',component: EditCarPageComponent , pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
