import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-edit-claim-trackers',
  templateUrl: './admin-edit-claim-trackers.component.html',
  styleUrls: ['./admin-edit-claim-trackers.component.css']
})
export class AdminEditClaimTrackersComponent implements OnInit {

  ClaimTrackerData:any
  ClaimTrackerId:number
  msg:string
  constructor(private DataService:DataService,private router:Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.ClaimTrackerId = params['claimtrackerid'];
     console.log(this.ClaimTrackerId);
  });

  let statusofresult= this.DataService.GetClaimTrackerByCTId(this.ClaimTrackerId)
   
  statusofresult.subscribe((result)=>{
    console.log(result);
    if(result!=null)
    {

      this.ClaimTrackerData=result
    }
    

  },(error)=>{
    console.log(error);
  })



}


UpdateClaimTracker()
{
  
  if(this.ClaimTrackerData==null || this.ClaimTrackerData==undefined)
  {
    this.msg="All fields are required"

  }
  else
  {
    this.msg=""
    let statusofresult= this.DataService.UpdateClaimTrackerById(this.ClaimTrackerId,this.ClaimTrackerData)
   
  statusofresult.subscribe((result)=>{
    console.log(result);
    window.alert("Updated Successfully")
    this.router.navigate(["/Admin/AllClaimTrackers"])

  },(error)=>{
    console.log(error);
  })

  }
}

}
