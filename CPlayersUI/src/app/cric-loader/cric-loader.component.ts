import { Component, OnInit ,OnChanges} from '@angular/core';
import {CricRestServiceService} from '../services/cric-rest-service.service';
import { Subject,Observable } from 'rxjs';
@Component({
  selector: 'app-cric-loader',
  templateUrl: './cric-loader.component.html',
  styleUrls: ['./cric-loader.component.css']
})
export class CricLoaderComponent implements OnInit {

  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  isLoading : Observable<boolean>;
  
  constructor(private cricRestService: CricRestServiceService ) {
    this.isLoading=this.cricRestService.isLoading;
   }
  //isLoading=true;

  
 
  
  ngOnInit() {
    //this.isLoaded=this.loaderService.isLoaded;
  }

}
