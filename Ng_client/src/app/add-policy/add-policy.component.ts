import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-policy',
  templateUrl: './add-policy.component.html',
  styleUrls: ['./add-policy.component.css']
})
export class AddPolicyComponent implements OnInit {

  AllPolicyData:any;
  constructor(
    public DataService: DataService,
    public router: Router) { 
    
  }

  ngOnInit() {
    let StatusOfUserSearched = this.DataService.GetAllPolicyData()
      StatusOfUserSearched.subscribe((result: any) => {
        // result.dob= new DatePipe(result.dob);
          
          this.AllPolicyData = result;
          console.log(this.AllPolicyData);
        
      });
  }

}
