import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductComponent} from './product/product.component';
import {CartDetailComponent} from './cart-detail/cart-detail.component';

const routes: Routes = [{
   path: '', component: ProductComponent 
},
{
  path:'cart-detail',component:CartDetailComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
