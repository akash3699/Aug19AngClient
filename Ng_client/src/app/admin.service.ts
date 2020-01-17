import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private router:Router) { }

  isAdminLoggedIn()
  {
    return (sessionStorage.roleID ==0);
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot)
  {
    if(this.isAdminLoggedIn())
    {
      
      return true;
    }
    else
    {
      delete sessionStorage["email"];
    delete sessionStorage["userid"];
    delete sessionStorage["roleID"];
    delete sessionStorage["userdata"];
    delete sessionStorage["isLoggedIn"];
      this.router.navigate(['Login']);
      return false;
    }
  }
}
