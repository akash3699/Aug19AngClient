import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-policy-details',
  templateUrl: './policy-details.component.html',
  styleUrls: ['./policy-details.component.css']
})
export class PolicyDetailsComponent implements OnInit {

  PolicyData:any
  policyID:any
  constructor(private DataService:DataService,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {


    this.activatedRoute.params.subscribe(params => {
       this.policyID = params['policyid'];
      console.log(this.policyID);
    });
      let StatusOfSearch = this.DataService.GetAllPolicyDataById(this.policyID)
    StatusOfSearch.subscribe((result:any)=>{
       console.log(result);
       this.PolicyData=result;  

    },(error)=>{
      console.log(error)
    });



      
    

    
  }

}
