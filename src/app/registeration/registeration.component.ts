import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {NgbCalendar, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { PasswordValidation } from '../Validators/validator.mustMatch';
@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {
    constructor(
        private formBuilder: FormBuilder,
        private router: Router,private calendar: NgbCalendar) { }  
    registerForm =new FormGroup({
        firstName:new FormControl('',Validators.required),
        lastName:new FormControl('',Validators.required),
        email:new FormControl('', [Validators.required,Validators.email]),
        password:new FormControl('',[Validators.required, Validators.minLength(6)]),
        confirmPassword:new FormControl('',Validators.required),
        address:new FormControl(''),
        organization:new FormControl(''),
        phoneNo:new FormControl('',[Validators.required,Validators.minLength(11)]),
        DOB:new FormControl('',Validators.required)
    },{
      validators: PasswordValidation.MatchPassword
    })
    model: NgbDateStruct;
    today = this.calendar.getToday();
    loading = false;
    submitted = false;
    ngOnInit() {}

    getpassword() { return this.registerForm.get('password'); }
    getconfirmpassword() { return this.registerForm.get('confirmPassword'); }
    getErrorMsg(){
        return this.getpassword().hasError('required')?'You Must Enter Password':this.getpassword().hasError('minLength')?'Password Must Be at Least 6 Char.':'';
    }
    getErrorMsgConfirm(){
        return this.getconfirmpassword().hasError('required')?'You Must Enter Confirm Password':'';
    }
    getfirstName() { return this.registerForm.get('firstName'); }
    getlastName() { return this.registerForm.get('lastName'); }
    getErrorMsgFirstName(){
        return this.getfirstName().hasError('required')?'You Must Enter First Name':'';
    }
    getErrorMsgLastName(){
        return this.getlastName().hasError('required')?'You Must Enter Last Name':'';
    }
    getemail() { return this.registerForm.get('email'); }
    getorganization() { return this.registerForm.get('organization'); }
    getErrorMsgEmail(){
        return this.getemail().hasError('required')?'You Must Enter Email':this.getemail().hasError('email')?'You Must Enter Valid Email':'';
    }
    getPhoneNo(){
        return this.registerForm.get('phoneNo');
    }
    getAddress(){
        return this.registerForm.get('address');
    }
    getErrorMsgPhone(){
        return this.getPhoneNo().hasError('required')?'You Must Enter a Phone Number':this.getPhoneNo().hasError('minLength(11)')?'Password Must Be at Least 11 Digit.':'';
    }
    getBirthDate(){
        return this.registerForm.get('DOB');
    }
    onSubmit() {
        this.router.navigate(['/HomeAfterLogin']);
    }
    backtoHome(event:Event){
        console.log(event);
        this.router.navigate(['/homewithoutlogin']);
    }

}
