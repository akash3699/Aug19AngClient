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
      
    },(error)=>{
      console.log(error)
    });
  }

  }
  

