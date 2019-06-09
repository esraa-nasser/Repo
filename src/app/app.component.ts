import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HomeWithoutLoginComponent} from './home-without-login/home-without-login.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'startProject';
  constructor( private activatedRoute:ActivatedRoute){ 
    
  }
}
