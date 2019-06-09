import { FormGroup, AbstractControl } from '@angular/forms';

// custom validator to check that two fields match
export class PasswordValidation{
    static MatchPassword(AC:AbstractControl){
        let password=AC.get('password').value;
        let confirmpassword=AC.get('confirmPassword').value;
        if(password!==confirmpassword){
            AC.get('confirmPassword').setErrors({MatchPassword:true})
        }
        else{
            return null
        }
    }
}
