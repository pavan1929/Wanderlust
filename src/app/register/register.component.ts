import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm : FormGroup;
  message : string;
  constructor(private formbuilder: FormBuilder) { }

  ngOnInit() {
    window.scrollTo(0, 0)
    this.registerForm = this.formbuilder.group({
      username : ['',Validators.required],
      email : ['', [emailMatch,Validators.required]],
      contactNo : ['',[Validators.pattern(/^[0-9]{10}$/),Validators.required]],
      password : ['',Validators.required]
    })
  }

}
function register(){
  let x: string;


}
function emailMatch(mail:FormControl){
  //
  //let regExp = /\S+@\S+\.\S+/
  //let regExp = /^([a-zA-Z\d-\_\.]+)@([a-zA-Z\d-\_\.]+)\.([\a\A]{2,5})$/;
  let regExp = /\S+@\S+\.([a-z]{2,5})$/;
  return regExp.test(mail.value) ? {
    Emailerror:{message:null}
  } : {
    Emailerror:{message:"Invalid Email Format"}
  }
}
