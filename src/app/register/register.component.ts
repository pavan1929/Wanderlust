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
      email : ['', emailMatch,Validators.required],
      contactNo : ['',Validators.required,Validators.pattern('^[0-9]{10}$')],
      password : ['',Validators.required]
    })
  }

}
function register(){


}
function emailMatch(mail:FormControl){
  console.log("went");
  let regExp = /^([a-zA-Z\d-\_\.]+)@([a-zA-Z\d_\-\.]+)\.([\a\A]{2,5})$/;
  return regExp.test(mail.value) ? null : {
    Emailerror:{message:"Invalid Email Format"}
  }
}
