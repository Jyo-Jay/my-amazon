import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { passwordMatch } from 'src/app/password-match.validator';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  regform = new FormGroup({
    firstName: new FormControl("",[Validators.required]),
    lastName: new FormControl("",[Validators.required]),
    address: new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required, Validators.email]),
    password:new FormControl("",[Validators.required])
   // confirmpassword:new FormControl("",[Validators.required]),
  // },
  // passwordMatch('password','confirmpassword')
  })

  constructor(private userService : UsersService , private router:Router) { }

  ngOnInit(): void {
  }


  get firstName():FormControl{
    return this.regform.get("firstName") as FormControl
  }
  get lastName():FormControl{
    return this.regform.get("lastName") as FormControl
  }
  get address():FormControl{
    return this.regform.get("address") as FormControl
  }
  get email():FormControl{
    return this.regform.get("email") as FormControl
  }
  get password():FormControl{
    return this.regform.get("password") as FormControl
  }

  // get confirmpassword():FormControl{
  //   return this.regform.get("confirmpassword") as FormControl
  // }

  onSubmit():void{
    this.userService.register(this.regform.value)
    .subscribe(data => {
      console.log(data);
      this.router.navigate(['/user/signin']);
    });
    console.log(this.regform.value);
    this.regform.reset();
  }



}
