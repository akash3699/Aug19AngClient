import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-customer-policy-details',
  templateUrl: './admin-customer-policy-details.component.html',
  styleUrls: ['./admin-customer-policy-details.component.css']
})
export class AdminCustomerPolicyDetailsComponent implements OnInit {

  constructor(private AuthService:AuthService, private router:Router) { 
    if(sessionStorage.roleID!=0)
    {
      delete sessionStorage["email"];
    delete sessionStorage["userid"];
    delete sessionStorage["roleID"];
    delete sessionStorage["userdata"];
    delete sessionStorage["isLoggedIn"];
    this.router.navigate(['Login']);
     

    }
  }

  ngOnInit() {
    
  }
}
