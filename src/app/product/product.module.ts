import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { DiscountPipe } from './discount.pipe';
import { ListComponent } from './list/list.component';
import { StarComponent } from './star/star.component';
import { TextColorDirective } from './text-color.directive';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SharedModule } from '../shared/shared.module';
import { ViewCartComponent } from './view-cart/view-cart.component';


@NgModule({
  declarations: [
    ListComponent,
    StarComponent,
    ProductDetailsComponent,
    TextColorDirective,
    DiscountPipe,
    ViewCartComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule
  ]
})
export class ProductModule { }
