import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Product } from '../../model/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {


  product!:Product
  discountrate:number=10

  constructor(private activateroute:ActivatedRoute, private productservice:ProductService, private cartservice:CartService) { }

  ngOnInit(): void {
    let id:number = eval(this.activateroute.snapshot.paramMap.get("id")!)
    // ! used to define id is undefine if id is not found in URL
    this.productservice.getProducts().subscribe({
      next:(list:Product[])=>{
        this.product = list.find(p=>{return p.productId==id})!
      }
    })
  }

  reviewform= new FormGroup({
    review:new FormControl("",[Validators.required])
  })

  addToCart(){
    this.cartservice.increaseCartCounter()
   }


  get review():FormControl{
    return this.reviewform.get("review") as FormControl
  }

   onSubmit(){
    console.log(this.reviewform.value)
    this.reviewform.reset()
   }


}
