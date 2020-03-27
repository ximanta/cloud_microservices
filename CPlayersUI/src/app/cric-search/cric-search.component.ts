import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CricRouterService } from '../services/cric-router.service';
import { CricRestServiceService } from '../services/cric-rest-service.service'

@Component({
  selector: 'app-cric-search',
  templateUrl: './cric-search.component.html',
  styleUrls: ['./cric-search.component.css']
})
export class CricSearchComponent implements OnInit {
  public pName = new FormControl('', Validators.required);
  constructor(private cricRestService: CricRestServiceService, private cricRouterService: CricRouterService) { }

  ngOnInit() {
  }
   doSearch() {
   
    this.cricRestService.isLoading.next(true);
  
    this.cricRestService.name = this.pName.value;
    this.cricRouterService.routeToSearchView();
  }
}
