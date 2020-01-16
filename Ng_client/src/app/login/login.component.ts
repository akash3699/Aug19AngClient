import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { MD5 } from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user;
  msg;
  constructor( public Auth_service: AuthService,
               public Data_service: DataService,
               public router: Router) { }

  ngOnInit() {
  }

  FormValidation(credentials: any)
  {
      if( credentials.email == "" || credentials.passwd == "" )
      {
          this.msg = "Username/Password is required!!";
      }
      else
      {
        this.Login(credentials);
      }

  }

  Login(credentials: { email: any; passwd: any; })
  {
    debugger
    
    let isLoggedIn = false;
    let FindUser = this.Data_service.LoginData(credentials);
    FindUser.subscribe((result: any) => {
      console.log(result);
      console.log(result.length);
    //if(result.affectedRows != 0)
    // if(result.length != 0)
    // {
      // this.user = result[0];
      isLoggedIn = true;
        if(isLoggedIn)
        {
          this.Auth_service.Login(result);
            this.msg = "";
            this.router.navigate(['Home']);
        }
        else
        {
            this.msg = " Username / Password is wrong!!";
         }
    // }
    // else
    // {
    //     this.msg = " Username / Password is wrong!!";
    // }
    },(error)=>{
            this.msg = "Username / Password is wrong!!";
            
    });
  }
}
