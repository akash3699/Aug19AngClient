import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  CustPolicyData:any
  PremiumScheduleData:any
  constructor( public service: AuthService,private DataService:DataService) { }


  GetCustPolicyData()
  {
    return this.CustPolicyData;
  }


  ngOnInit() {
    let StatusOfSearch = this.DataService.GetCustPolicyData(sessionStorage.userid);
    StatusOfSearch.subscribe((result:any)=>{
       console.log(result);
       this.CustPolicyData=result;

       this.CustPolicyData.forEach(element => {
        let StatusOfPremiumSearch = this.DataService.GetCustPolicyDataByCustPolicyId(element.cpid)
      StatusOfPremiumSearch.subscribe((result:any)=>{
        
         console.log(result);
        //  let id =element.cpid;
        //  this.PremiumScheduleData.push(result);
        element.premiumschedule=result
        console.log(this.CustPolicyData)
      },(error)=>{
        console.log(error)
      });
  
        
      });
      
    },(error)=>{
      console.log(error)
    });

    


  }

  }
  

