import { Component, OnInit } from '@angular/core';
import { PasswordValidation } from '../Validators/validator.mustMatch';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private router: Router) { }
 
  registerForm =new FormGroup({
    Name:new FormControl('',Validators.required),    
    email:new FormControl('', [Validators.required,Validators.email]),   
    Message:new FormControl('',Validators.required),
    
})
getName() { return this.registerForm.get('Name'); }
getErrorMsgName(){
  return this.getName().hasError('required')?'You Must Enter A Name':'';
}
getemail() { return this.registerForm.get('email'); }
getErrorMsgEmail(){
  return this.getemail().hasError('required')?'You Must Enter Email':this.getemail().hasError('email')?'You Must Enter Valid Email':'';
}
getMsg(){
  return this.registerForm.get('Message');
}
getErrorMsg(){
  return this.getMsg().hasError('required')?'You Must Enter a Message':'';
}
onSubmit(name:string,email:string,msg:string){
  
  alert("my name is "+name+" And i'm sending this message because "+msg);
}
  ngOnInit() {
  }

}
