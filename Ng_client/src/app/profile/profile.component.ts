import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
   UserProfileData: any;
  

  constructor(public AuthService : AuthService,
              public DataService : DataService) {
  
                this.UserProfileData=this.AuthService.UserProfileData();
                
              }

  ngOnInit() {
    
    let FindUser = this.DataService.UserProfileData(sessionStorage.userid);
    FindUser;
    FindUser.subscribe((result: any)=>{
      console.log(result);
        this.UserProfileData = result;
      
    });
  }
  
}



// console.log(this.UserData.uname);
// console.log(this.UserData.pwd);
// console.log(this.UserProfileData.uname);
// console.log(this.UserProfileData.email);
// console.log(this.UserProfileData.phone);
// console.log(this.UserProfileData.dob);