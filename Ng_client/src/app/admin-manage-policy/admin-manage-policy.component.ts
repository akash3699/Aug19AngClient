import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-admin-manage-policy',
  templateUrl: './admin-manage-policy.component.html',
  styleUrls: ['./admin-manage-policy.component.css']
})
export class AdminManagePolicyComponent implements OnInit {

  PolicyData:any
  policyID:number
  constructor(private DataService:DataService,private router:Router,private activatedRoute: ActivatedRoute) {
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

    this.activatedRoute.params.subscribe(params => {
      this.policyID = params['policyid'];
     console.log(this.policyID);
   });
    let statusofresult= this.DataService.GetAllPolicyDataById(this.policyID)
   
    statusofresult.subscribe((result)=>{
      console.log(result);
      this.PolicyData=result

    },(error)=>{
      console.log(error);
    })



  }

  UpdatePolicy()
  {
    let statusofresult= this.DataService.UpdatePolicy(this.PolicyData)
   console.log(this.PolicyData)
    statusofresult.subscribe((result)=>{
      console.log(result);
      this.PolicyData=result
      this.router.navigate(["/Admin"])

    },(error)=>{
      console.log(error);
    })

  }

}
