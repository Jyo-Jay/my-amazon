import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { CartService } from '../../services/cart.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  counter!:number
  display: any;
  isLoggedIn$ : any
  user$ : any = null;


constructor(private cartservice:CartService, private userService:UsersService) {
    console.log("Header is created")
    this.isLoggedIn$ = this.userService.isLoggedIn$;

  }

ngOnInit(): void {
    this.cartservice.cartCounter$.subscribe({
      next:(value:number) => this.counter=value,
      error:(e:any) => console.error("Error",e),
      complete:() => console.log("Done."),
    })
    //this.user$ = localStorage.getItem('userName');
  }


onClick()
 {
   this.cartservice.cartCounter = 0
   this.cartservice.cartCounter$.next(0)
 }



logout(): void {
   this.userService.logout();
   //localStorage.removeItem('userName');
  }

  // openModal(){
  //   this.display='block'
  // }
  // onCloseHandled(){
  //   this.display='none'
  // }

}
