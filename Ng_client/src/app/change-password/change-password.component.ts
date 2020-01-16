import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  UserData:any;
  msg:string;
  constructor(private DataService:DataService,private AuthService:AuthService,
                private router:Router) { }
                
  ngOnInit() {
    this.UserData=this.AuthService.UserProfileData();
  }

  UpdateUserPassword()
  {

    let StatusOfUpdate = this.DataService.UpdateUserPassword(this.UserData);
    StatusOfUpdate.subscribe((result:any)=>{
        if(result== 1)
        {
          this.router.navigate(['Profile']);
        }
        else
        {
          console.log(result)
          this.msg = "Something went wrong!";
        }
    },(error)=>{
      console.log(error)
    });
  }


}
