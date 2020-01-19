import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-historyof-paid-premium',
  templateUrl: './historyof-paid-premium.component.html',
  styleUrls: ['./historyof-paid-premium.component.css']
})
export class HistoryofPaidPremiumComponent implements OnInit {

  CustPolicyData:any
  HistoryOfPaidPremiums:any=[]
  constructor(public service: AuthService,private DataService:DataService) { }

  ngOnInit() {

    let StatusOfSearch = this.DataService.GetCustPolicyData(sessionStorage.userid);
    StatusOfSearch.subscribe((result:any)=>{
       console.log(result);
       this.CustPolicyData=result;

       this.CustPolicyData.forEach(elementcp => {
        
        elementcp.premiumschedule.forEach(elementps => {
          // console.log(elementps)
          let StatusOfPremiumSearch = this.DataService.GetPaidDateByPremiumSchedule(elementps.premiumscheduleid)
      StatusOfPremiumSearch.subscribe((result:any)=>{
        
        //  console.log(result);
        //  let id =element.cpid;
        //  this.PremiumScheduleData.push(result);
        this.HistoryOfPaidPremiums+=JSON.stringify(result)
        elementps.historyofpaidpremium=result
        // console.log(this.HistoryOfPaidPremiums)
        
      },(error)=>{
        console.log(error)
      });
          
        });
        
        
        
      });
      
      console.log(this.CustPolicyData)
      
    },(error)=>{
      console.log(error)

      this.HistoryOfPaidPremiums=JSON.parse(this.HistoryOfPaidPremiums)
      console.log(this.HistoryOfPaidPremiums);
      
    });
  }

}
