import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( public service: AuthService, private router:Router) { }

  ngOnInit() {
    
  }

  

  Logout()
  {
    this.service.Logout();
  }
}
