import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/model/cart.model';
import { CartService } from '../../services/cart.service';
//import { Product } from '../../model/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {



//productList:Product[]=[]


styleclass={
  'text-align':'left'
}

styleText={
  'font-weight':'bold',
  'font-size':'14px'
}

 discountrate:number=10

 products$ = this.productservice.getProducts();

 constructor(private cartService:CartService, private productservice:ProductService, private router:Router) { }


  ngOnInit(): void {
    // this.productservice.getProducts().subscribe({
    //   next:(list:Product[])=>this.productList=list,
    //   error:(e:any)=>console.error("Error",e),
    //   complete:()=>console.log("Done")
    // })
  }

  show(value:number){
    console.log(value)
  }

  addToCart(id:any){
    this.cartService.addToCart(id)
    .subscribe(data=>{
      console.log(data);
      //this.router.navigate(['/product/view-cart'])

    });
    this.cartService.increaseCartCounter()
  }

}
