import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-admin-all-claim-trackers',
  templateUrl: './admin-all-claim-trackers.component.html',
  styleUrls: ['./admin-all-claim-trackers.component.css']
})
export class AdminAllClaimTrackersComponent implements OnInit {

  AllClaimTrackers:any
  constructor(private DataService:DataService) { }

  ngOnInit() {
    let StatusOfPremiumSearch = this.DataService.GetAllClaimTrackers()
      StatusOfPremiumSearch.subscribe((result:any)=>{
        
         console.log(result);
        //  let id =element.cpid;
        //  this.PremiumScheduleData.push(result);
        // element.premiumschedule=result
        this.AllClaimTrackers=result
        console.log(this.AllClaimTrackers)
        
      },(error)=>{
        console.log(error)
  });

  }
}