import { Component, OnInit } from '@angular/core';
import { CricRestServiceService } from '../services/cric-rest-service.service';
import {Observable} from 'rxjs';
import {CricRouterService} from  '../services/cric-router.service';
import { Router ,NavigationEnd} from '@angular/router';


@Component({
  selector: 'app-cric-header',
  templateUrl: './cric-header.component.html',
  styleUrls: ['./cric-header.component.css']
})
export class CricHeaderComponent implements OnInit {

  isLoggedIn : Observable<boolean>;
 
  constructor(private router:Router,private cricrestService:CricRestServiceService,private cricRouterService:CricRouterService) { 
   
   
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if(this.router.url ==='/login'||this.router.url ==='/register'){
          this.cricrestService.loggedIn.next(false);
         }
        this.isLoggedIn=this.cricrestService.loggedIn;
      }
    })
  }
  logOut(){
    sessionStorage.clear();
    this.cricrestService.loggedIn.next(false);
   this.cricRouterService.routeToLogin();
  }

}
