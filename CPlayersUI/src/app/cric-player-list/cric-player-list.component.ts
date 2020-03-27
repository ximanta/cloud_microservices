import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CricRouterService } from '../services/cric-router.service';
import { CricRestServiceService } from '../services/cric-rest-service.service'
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-cric-player-list',
  templateUrl: './cric-player-list.component.html',
  styleUrls: ['./cric-player-list.component.css']
})
export class CricPlayerListComponent implements OnInit {
  public players;
  public favourList: [];
  constructor(private router: Router, private cricRestService: CricRestServiceService, private cricRouterService: CricRouterService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {

        this.getSearcList();

      }
    });
  }
  ngOnInit() {

  }

  getSearcList() {
    this.cricRestService.doSearch().subscribe(

      response => {
        if (response.status === 200) {
          this.players = response['body']['data'];
          this.cricRestService.isLoading.next(false);
        }

      },
      error => {

      }
    )

  }


  isLikedAlready(playerId) {
    let player;
    if (this.cricRestService.favouriteList) {
      player = this.cricRestService.favouriteList.find(player => "'" + player['playerId'] + "'" === "'" + playerId + "'");
    }
    if (player) {
      return true;
    }
    return false;
  }
  public viewPlayer(playerId) {
    this.cricRestService.pid = playerId;
    this.cricRouterService.routeToPlayerView();
    this.cricRestService.isLoading.next(true);
  }

}
