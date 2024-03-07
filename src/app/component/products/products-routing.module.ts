import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Mainproduct2Component } from './mainproduct2/mainproduct2.component';
import { Mainproduct1Component } from './mainproduct1/mainproduct1.component';
import { Mainproduct3Component } from './mainproduct3/mainproduct3.component';


const routesChild: Routes = [{
  path:'', 
  children:[
    {path:'mainproduct3', component: Mainproduct1Component},
    {path:'mainproduct3', component: Mainproduct2Component},
    {path:'mainproduct3', component: Mainproduct3Component}
  ]
}  
];

@NgModule({
  imports: [RouterModule.forChild(routesChild)],
  exports: [RouterModule,]
})
export class ProductRoutingModule { }
