import { NgModule } from '@angular/core';
import { ExtraOptions, PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { AboutUSComponent } from './component/about-us/about-us.component';
import { ContactUSComponent } from './component/contact-us/contact-us.component';
import { NotfoundComponent } from './component/notfound/notfound.component';


const routes: Routes = [
  {path:'', redirectTo: 'Home', pathMatch: 'full'},
  {path:'Home', component: HomeComponent},
  {
    path:'products', 
    loadChildren: () => import('./component/products/products.module').then(m=>m.ProductsModule)
  },  
  {path:'AboutUs', component: AboutUSComponent},
  {path:'ContactUs', component: ContactUSComponent},
  {path:'**', component:NotfoundComponent}
];

const routerOptions: ExtraOptions = {
  //useHash: true,
  preloadingStrategy: PreloadAllModules // when I added this line its working
};

@NgModule({
  declarations: [
  ],
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
