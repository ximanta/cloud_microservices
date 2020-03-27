import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CricRouterService } from '../services/cric-router.service';
import { CricRestServiceService } from '../services/cric-rest-service.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-cric-favour-list',
  templateUrl: './cric-favour-list.component.html',
  styleUrls: ['./cric-favour-list.component.css']
})
export class CricFavourListComponent implements OnInit {

  public favourList;
  displayedColumns: string[] = ['position', 'playerName'];
  constructor(private router: Router, private cricRestService: CricRestServiceService, private cricRouterService: CricRouterService) { }

  ngOnInit() {

    this.cricRestService.doGetFavourites().subscribe(

      response => {
        if (response.status === 200) {
          this.favourList = response['body']['faPlayers'];
          this.cricRestService.favouriteList= this.favourList;
         // this.cricRestService.favouriteList= this.favourList;
        }

      },
      error => {

      }
    )
  }



}
