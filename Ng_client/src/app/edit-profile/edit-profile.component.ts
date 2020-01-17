import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  UserData:any;
  dob:any;
  msg:string;
  constructor(public routes: ActivatedRoute,
    public DataService: DataService,
    public router: Router) {
    this.msg = "";
  }

  ngOnInit() {
    let EditParas = this.routes.paramMap;

    EditParas.subscribe((params) => {
      let userId = sessionStorage.userid;
      let StatusOfUserSearched = this.DataService.UserProfileData(userId);
      StatusOfUserSearched.subscribe((result: any) => {
        // result.dob= new DatePipe(result.dob);
          this.dob=result.dob;
          this.UserData = result;
          console.log(this.UserData);
        
      });
    });
  }
  UpdateUserData()
  {
    let StatusOfUpdate = this.DataService.UpdateUserData(this.UserData);
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
