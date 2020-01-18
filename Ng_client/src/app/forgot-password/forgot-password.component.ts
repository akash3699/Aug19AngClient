import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  // data:any
  msg:string;
  constructor(private DataService:DataService,private router:Router) { }

  ngOnInit() {
  }

  ForgotPassword(data:any)
  {

    if(data.form.value.email==undefined || data.form.value.email==null || data.form.value.email=="" )
    {
      console.log(data.form.value.email)
      this.msg="Enter Valid Email Address"

    }
    else
    {
      console.log(data.form.value.email)
      let StatusofResult = this.DataService.ForgotUserPasswordData(data.form.value.email);
    StatusofResult.subscribe((result)=>{
      console.log(result)

      if(result==1)
      {
        window.alert("Successfully Sent Email !! Please Check Email")
        this.router.navigate(["/Login"])

      }
      else{
        window.alert("Something Went Wrong!! in Finding User details")
      }
    },(error)=>{
      console.log(error)
      window.alert("Something Went Wrong!! in Finding User details")
    })

    }

  }
}
