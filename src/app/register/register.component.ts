import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators, FormControl} from '@angular/forms';
import {Route,Router} from '@angular/router';
import {RegisterService} from  './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  message : string;
  constructor(private formbuilder: FormBuilder, private router:Router, private registerService:RegisterService) { }

  ngOnInit() {}
  registerForm = this.formbuilder.group({
    username : ['',Validators.required],
    email : ['', [Validators.required,emailMatch]],
    contactNo : ['',[Validators.required,Validators.pattern(/^[0-9]{10}$/)]],
    password : ['',Validators.required]
  })
  register(){
    console.log("asd")
    this.message = "loading"
      this.registerService.register(this.registerForm.value).subscribe(
        (response)=>{
          this.message = "Register Succesful";
        },
        (errorResponse)=>{
          this.message = "Error in registering";
          sessionStorage.clear()
        }
    )
  
  }

}
function emailMatch(mail:FormControl){
  //
  //let regExp = /\S+@\S+\.\S+/
  //let regExp = /^([a-zA-Z\d-\_\.]+)@([a-zA-Z\d-\_\.]+)\.([\a\A]{2,5})$/;
  let regExp = /\S+@\S+\.([a-z]{2,5})$/;
  return regExp.test(mail.value) ?  
  null : {
    Emailerror:{message:"Invalid Email Format"}
  }
}
