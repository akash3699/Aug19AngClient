import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-add-claim-tracker',
  templateUrl: './admin-add-claim-tracker.component.html',
  styleUrls: ['./admin-add-claim-tracker.component.css']
})
export class AdminAddClaimTrackerComponent implements OnInit {

  msg: string;
  constructor(private AuthService:AuthService,private service: DataService, private router:Router) { }

  ngOnInit() {
  }

  FormValidation(ClaimTrackerData: any) {
    if ( ClaimTrackerData.form.value.policyname == "" ||
    ClaimTrackerData.form.value.policydescription == "" || 
    ClaimTrackerData.form.value.policyduration == "") {
      this.msg = "All fields are compulsory!!";
    }
    else {
      
      let resultstate:any = this.service.AddClaimTrackerById(sessionStorage.userId,ClaimTrackerData.form.value)
      console.log(ClaimTrackerData.form.value)
      resultstate.subscribe((data: any) => {
        // if (data.error == null) {
          this.msg = "Successfully Added Up!!"+data;
          window.alert(this.msg)
          this.router.navigate(['/Admin/AllClaimTrackers']);
        // }
        // else {
        //   // console.log(data);
        //   // this.msg = "Somthing went Wrong!!";
        //   // this.num = 0;
        // }
      },(error)=>{
        console.log(error);
          this.msg = "Somthing went Wrong!!";
          
      });
    }
  }

}
