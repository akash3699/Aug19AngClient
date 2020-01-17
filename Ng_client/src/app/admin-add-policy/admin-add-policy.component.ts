import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-admin-add-policy',
  templateUrl: './admin-add-policy.component.html',
  styleUrls: ['./admin-add-policy.component.css']
})
export class AdminAddPolicyComponent implements OnInit {

  msg: string;
  num: number;

  constructor(private AuthService:AuthService,private service: DataService, private router:Router) { 
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

  FormValidation(PolicyData: any) {
    if ( PolicyData.form.value.policyname == "" ||
    PolicyData.form.value.policydescription == "" || 
    PolicyData.form.value.policyduration == ""|| 
    PolicyData.form.value.totalinsuranceamount == "") {
      this.msg = "All fields are compulsory!!";
    }
    else {
      
      let resultstate:any = this.service.AddPolicyData(PolicyData.form.value)
      console.log(PolicyData.form.value)
      resultstate.subscribe((data: any) => {
        // if (data.error == null) {
          this.msg = "Successfully Added Up!!";
         
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
