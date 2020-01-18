import { Component, OnInit, Query } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-premium-calulator',
  templateUrl: './premium-calulator.component.html',
  styleUrls: ['./premium-calulator.component.css']
})
export class PremiumCalulatorComponent implements OnInit {

  PolicyData:any;
  msg:string
  param1: string;

constructor(private route: ActivatedRoute,private DataService:DataService,private router:Router) {
    console.log('Called Constructor');
    this.route.queryParams.subscribe(params => {
        this.param1 = this.route.snapshot.params.policyId
        console.log(this.param1)
    });
}
  ngOnInit() {

    let StatusOfUpdate = this.DataService.GetAllPolicyDataById(this.param1)
    StatusOfUpdate.subscribe((result:any)=>{
      this.PolicyData=result
      console.log(this.PolicyData)
    },(error)=>{
      console.log(error)
    });

  }

  CalculatePremium(){
    let daysofyears:number=this.PolicyData.policyduration*365
    if(this.PolicyData.ps=="YEARLY")
    {
      this.PolicyData.totalpremiumcount = daysofyears/365

    }
    else{
      if(this.PolicyData.ps=="MONTHLY"){

        this.PolicyData.totalpremiumcount = daysofyears/12;

      }
      else{
        if(this.PolicyData.ps=="WEEKLY"){

          this.PolicyData.totalpremiumcount = daysofyears/7
        }
      }

    } 
    this.PolicyData.premiumamout = this.PolicyData.totalinsuranceamount/this.PolicyData.totalpremiumcount
    
  }
  BuyPolicy(){
    this.PolicyData.userid= sessionStorage.userid;
    this.PolicyData.policyid=this.param1;
    let StatusOfUpdate = this.DataService.BuyPolicy(this.PolicyData)
    StatusOfUpdate.subscribe((result:any)=>{
      
      console.log(result)
      alert("Purchased SuccessFully")
      this.router.navigate(["Home"])
    },(error)=>{
      console.log(error)
    });

  }

}
