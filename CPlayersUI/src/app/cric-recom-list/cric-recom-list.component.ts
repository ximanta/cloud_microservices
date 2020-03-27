import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CricRouterService } from '../services/cric-router.service';
import { CricRestServiceService } from '../services/cric-rest-service.service'
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-cric-recom-list',
  templateUrl: './cric-recom-list.component.html',
  styleUrls: ['./cric-recom-list.component.css']
})
export class CricRecomListComponent implements OnInit {
  public recommList;
  //[{"playerId":"24130","playerName":"Rahul gg","likes":1},{"playerId":"35320","playerName":"Sachin Ramesh Tendulkar","likes":1},{"playerId":"253802","playerName":"Virat Kohli","likes":1},{"playerId":"434225","playerName":"Ishani Seneviratne","likes":1}]
  displayedColumns: string[] = ['position', 'playerName', 'likes'];

  constructor(private router: Router, private cricRestService: CricRestServiceService, private cricRouterService: CricRouterService) { }

  ngOnInit() {

    this.cricRestService.doGetRecommends().subscribe(

      response => {
        if (response.status === 200) {
          this.recommList = response['body'];
        }

      },
      error => {

      }
    )
  }


}
