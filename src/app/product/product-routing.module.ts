import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ViewCartComponent } from './view-cart/view-cart.component';

const routes: Routes = [
  { path:'list',component:ListComponent },
  { path:'product-details/:id',component:ProductDetailsComponent},
  { path:'view-cart',component:ViewCartComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
