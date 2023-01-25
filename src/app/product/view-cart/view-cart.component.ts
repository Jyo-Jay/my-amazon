import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cart } from 'src/app/model/cart.model';
import { Product } from 'src/app/model/product.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {

  cart!: Cart

  discount:number=10
  constructor( private cartservice:CartService, private activatedroute:ActivatedRoute ) { }

  ngOnInit(): void {
    let id:string=this.activatedroute.snapshot.params['id'];
      this.cartservice.getCartItems().subscribe({
      next:(list:Cart[])=>{
        this.cart = list.find(c=>{return c._id==id})!
      }
    })

  }


}








  // products:Product[]=[
  //   {
  //     "_id":"3094834",
  //     "productName":"Biba",
  //     "productType":"Women's Cotton Anarkali with Palazzo",
  //     "productImage":"assets/img/k1.jpg",
  //     "productPrice":2500,
  //     "productDesc":"A kurta palazzo set for your summer wardrobe; The set includes 2 pieces, a red kurt and palazzo matching to the kurta.",

  //     "rating":3.4
  //   },
  //   {
  //     "_id":"309345334",
  //     "productName":"W For Women",
  //     "productType":"Women's Light Blue printed kurta with palazzo and Dupatta",
  //     "productImage":"assets/img/k2.jpg",
  //     "productPrice":3500,
  //     "productDesc":"A light blue shade kurta palazzo set for your wardrobe; The set includes 3 pieces, a light-blue shade kurta, one blue shade dupatta and light-blue palazzo matching to the kurta.",
  //     "rating":3.8,

  //   }
  // ]

