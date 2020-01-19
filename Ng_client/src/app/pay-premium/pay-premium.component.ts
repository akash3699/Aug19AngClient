import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-pay-premium',
  templateUrl: './pay-premium.component.html',
  styleUrls: ['./pay-premium.component.css']
})
export class PayPremiumComponent implements OnInit {
  PremiumSchedule:any
  PolicyData:any
  PremiumScheduleId:any
  constructor(private DataService:DataService,private router:Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.PremiumScheduleId = params['premiumscheduleid'];
     console.log(this.PremiumScheduleId);
   });

   let statusofresult= this.DataService.GetCustPolicyPremiumData(this.PremiumScheduleId)
   
    statusofresult.subscribe((result)=>{
      
      console.log(result);
      this.PremiumSchedule=result

    },(error)=>{
      console.log(error);
    })

    let statusofpolicyresult= this.DataService.GetCustPolicyDataByPremiumScheduleId(this.PremiumScheduleId)
   
    statusofpolicyresult.subscribe((result)=>{
      console.log(result);
      this.PolicyData=result

    },(error)=>{
      console.log(error);
    })


  }


  PayPremiumNow()
  {
    let statusofpolicyresult= this.DataService.PayCustPolicyPremium(this.PremiumScheduleId)
   
    statusofpolicyresult.subscribe((result)=>{
      console.log(result);
      window.alert(result)
      this.router.navigate(["Home"])
    },(error)=>{
      console.log(error);
    })

  }

}
