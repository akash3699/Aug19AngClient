import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-manage-policy',
  templateUrl: './admin-manage-policy.component.html',
  styleUrls: ['./admin-manage-policy.component.css']
})
export class AdminManagePolicyComponent implements OnInit {

  constructor(private router:Router) {
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
