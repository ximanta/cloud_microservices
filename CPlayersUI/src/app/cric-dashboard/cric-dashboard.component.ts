import { Component, OnInit } from '@angular/core';
import { CricRouterService } from '../services/cric-router.service';
import { CricRestServiceService } from '../services/cric-rest-service.service';

@Component({
  selector: 'app-cric-dashboard',
  templateUrl: './cric-dashboard.component.html',
  styleUrls: ['./cric-dashboard.component.css']
})
export class CricDashboardComponent implements OnInit {
 
  constructor(private cricRestService: CricRestServiceService, private cricRouterService: CricRouterService) {
    this.cricRestService.doGetFavourites().subscribe(
      response => {
        if (response.status === 200) {
          this.cricRestService.favouriteList= response['body']['faPlayers'];
        }

      },
      error => {

      }
    )
  }
   

  ngOnInit() {
  }

}
