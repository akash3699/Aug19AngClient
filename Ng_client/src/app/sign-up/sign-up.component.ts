import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MD5 } from 'crypto-js';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  msg: string;
  num: number;
  constructor(private service: DataService) { this.num = 0 }

  ngOnInit() { }

  FormValidation(UserData: any) {
    if ( UserData.form.value.email == "" ||
      UserData.form.value.mobile == "" || 
      UserData.form.value.passwd == "") {
      this.msg = "All fields are compulsory!!";
    }
    else if(UserData.form.value.mobile.toString().length !=10){
      this.msg = "Phone no should be 10 numbers!!";
    }
    else{
      
      let resultstate:any = this.service.SignupData(UserData.form.value);
      
      resultstate.subscribe((data: any) => {
        // if (data.error == null) {
          this.msg = "Successfully Signed Up!!";
          this.num = 1;
        // }
        // else {
        //   // console.log(data);
        //   // this.msg = "Somthing went Wrong!!";
        //   // this.num = 0;
        // }
      },(error)=>{
        console.log(error);
          this.msg = "Somthing went Wrong!!";
          this.num = 0;
      });
    }
  }
}
