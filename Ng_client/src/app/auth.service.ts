import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MD5, enc } from "crypto-js";

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  UserData: any
  constructor(public router: Router) { }

  isLoggedIn()
  {
    return (sessionStorage.getItem("isLoggedIn") == "1");
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot)
  {
    if(this.isLoggedIn())
    {
      
      return true;
    }
    else
    {
      this.router.navigate(['Login']);
      return false;
    }
  }
  Login( result_data:  any)
  {
    
    // console.log(credentials);
    // console.log(result_data);
    // const crypto_pwd = MD5(credentials.passwd);
    // console.log(crypto_pwd);
    // console.log(result_data.passwd);
    // if (credentials.email == result_data.email &&
    //     crypto_pwd   == result_data.passwd)
    // {

    
      sessionStorage.setItem("isLoggedIn", "1");
      sessionStorage.setItem("email", result_data.email);
      sessionStorage.setItem("userid", result_data.userId);
      sessionStorage.setItem("roleID", result_data.roleID);
      sessionStorage.setItem("userdata", JSON.stringify(result_data));
      console.log(result_data.roleID)
      this.UserData = result_data;

      return true;
    // }
    // else
    // {
    //   return false;
    // }
  }
  Logout()
  {
    sessionStorage.setItem("isLoggedIn", "0");
    delete sessionStorage["email"];
    delete sessionStorage["userid"];
    delete sessionStorage["roleID"];
    delete sessionStorage["userdata"];
    delete sessionStorage["isLoggedIn"];
    this.router.navigate(['Login']);
  }

  UserProfileData()
  {
    return this.UserData;
  }
}
