import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-claim-tracker',
  templateUrl: './claim-tracker.component.html',
  styleUrls: ['./claim-tracker.component.css']
})
export class ClaimTrackerComponent implements OnInit {

  ClaimTrackerData:any
  constructor(public service: AuthService,private DataService:DataService) { }

  ngOnInit() {

    let StatusOfPremiumSearch = this.DataService.GetClaimTrackerById(sessionStorage.userid)
      StatusOfPremiumSearch.subscribe((result:any)=>{
        
        //  console.log(result);
        //  let id =element.cpid;
        //  this.PremiumScheduleData.push(result);
        this.ClaimTrackerData=result
        // elementps.historyofpaidpremium=result
        // console.log(this.HistoryOfPaidPremiums)
        
      },(error)=>{
        console.log(error)
      });

  }

}
