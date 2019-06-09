import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders, HttpClientModule} from '@angular/common/http'; 
import {NgForm}  from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ;
  invalidLogin: boolean;
  constructor(public http: HttpClient,    private router: Router    ) { }
  login(form: NgForm) {
    let credentials = JSON.stringify(form.value);
    this.http.post("http://localhost:61010/login", credentials , {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': 'http://localhost:61010/login',
        "Content-Type": "application/json"
      })
    }).subscribe(response => {
      let token = (<any>response).token;
      localStorage.setItem("jwt", token);
      this.invalidLogin = false;
      this.router.navigate(["/"]);
      console.log(token);
    }, err => {
      this.invalidLogin = true;
    });
  }
  ngOnInit() {
  }

}
