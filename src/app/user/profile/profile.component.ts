import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {



 user$ !:any

  constructor(private userService: UsersService) {
   this.userService.getUsers(localStorage.getItem('currentUserId')).subscribe(data => {
       this.user$= data;
    });
  }

  ngOnInit(): void {
  }

// profileform = new FormGroup({
  //   firstName: new FormControl("",[Validators.required]),
  //   lastName: new FormControl("",[Validators.required]),
  //   address: new FormControl("",[Validators.required]),
  //   email:new FormControl("",[Validators.required, Validators.email]),
  //   mobile : new FormArray([new FormControl("",Validators.required)])
  // })

  // get firstName():FormControl{
  //   return this.profileform.get("firstName") as FormControl
  // }
  // get lastName():FormControl{
  //   return this.profileform.get("lastName") as FormControl
  // }
  // get address():FormControl{
  //   return this.profileform.get("address") as FormControl
  // }

  // get email():FormControl{
  //   return this.profileform.get("email") as FormControl
  // }

  // get mobile():FormArray{
  //   return this.profileform.get('mobile') as FormArray
  // }
  // addMboile()
  // {
  //   this.mobile.push(new FormControl("",Validators.required))
  // }
  // removeMboile()
  // {
  //   //this.mobile.removeAt(-1)
  //   this.mobile.removeAt(this.mobile.length-1)
  // }


  // onSubmit(){
  //   console.log(this.profileform.value)
  // }


}
