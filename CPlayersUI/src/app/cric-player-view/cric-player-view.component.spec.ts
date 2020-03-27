import { async, ComponentFixture, TestBed, fakeAsync, tick, inject} from '@angular/core/testing';
import { FormsModule, FormControl } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CricRestServiceService } from '../services/cric-rest-service.service'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Location } from '@angular/common';
import { By } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import {CricRouterService} from  '../services/cric-router.service';
import { Router } from '@angular/router';


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



import { MatMenuModule } from '@angular/material/menu';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';

import { MatTabsModule } from '@angular/material/tabs';



import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ReactiveFormsModule } from '@angular/forms';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

import { CricPlayerViewComponent } from './cric-player-view.component';

describe('CricPlayerViewComponent', () => {
  let component: CricPlayerViewComponent;
  let fixture: ComponentFixture<CricPlayerViewComponent>;
  let restService:CricRestServiceService;
  let positiveResponse: any;
  let location: Location;
  //let routerService: any;
  let errorMessage: any;
  let debugElement: any;
  let element: any;
  let spyRegisteredUser: any;
  let routerService: any;
  const routerSpy: any = {};
  let player:any={};
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CricPlayerViewComponent ],imports: [
        FormsModule,
        BrowserAnimationsModule,
        MatInputModule,
       MatFormFieldModule,
        MatInputModule,
        MatMenuModule,
         MatToolbarModule,
        MatCardModule,
        MatExpansionModule,
        MatGridListModule,
        MatListModule,
  
        MatTabsModule,
  
        MatProgressSpinnerModule,
  
        MatDialogModule,
        MatSnackBarModule,
        MatTooltipModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
        HttpClientModule,
        ReactiveFormsModule
      ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        CricRestServiceService,
        CricRouterService,
        { provide: Location, useValue: {} },
        { provide: Router, useValue: routerSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CricPlayerViewComponent);
    component = fixture.componentInstance;
    component.player={
      "pid": 24129,
      "country": "Hong Kong",
      "profile": "\n\nRahul Sharma played first-class cricket in India between 1985 and 1988 before he emigrated to Hong Kong where he soon established himself as a talented batsman. Once he had served his four-year qualification period he became an automatic member of the national side and he went on to play more times and score more runs than any other national player. When he retired from the game in 2007 at the age of 47 he had played more than 100 matches for Hong Kong and scored over 20 hundreds.\nMartin Williamson\n \n\n",
      "imageURL": "https://www.cricapi.com/playerpic/24129.jpg",
      "battingStyle": "Right-hand bat",
      "bowlingStyle": "Right-arm offbreak",
      "majorTeams": "Hong Kong,Delhi",
      "currentAge": "57 years 28 days",
      "born": "September 14, 1960, New Delhi, India",
      "fullName": "Rahul Sharma",
      "name": "Rahul Sharma",
      "playingRole": null,
      "v": "2",
      "data": {
          "bowling": {
              "listA": {
                  "10": "-",
                  "5w": "-",
                  "4w": "-",
                  "SR": "-",
                  "Econ": "-",
                  "Ave": "-",
                  "BBM": "-",
                  "BBI": "-",
                  "Wkts": "-",
                  "Runs": "-",
                  "Balls": "-",
                  "Inns": "-",
                  "Mat": "2"
              },
              "firstClass": {
                  "10": "-",
                  "5w": "-",
                  "4w": "-",
                  "SR": "-",
                  "Econ": "-",
                  "Ave": "-",
                  "BBM": "-",
                  "BBI": "-",
                  "Wkts": "-",
                  "Runs": "-",
                  "Balls": "-",
                  "Inns": "-",
                  "Mat": "1"
              },
              "ODIs": {
                  "10": "-",
                  "5w": "-",
                  "4w": "-",
                  "SR": "-",
                  "Econ": "-",
                  "Ave": "-",
                  "BBM": "-",
                  "BBI": "-",
                  "Wkts": "-",
                  "Runs": "-",
                  "Balls": "-",
                  "Inns": "-",
                  "Mat": "2"
              }
          },
          "batting": {
              "listA": {
                  "50": "0",
                  "100": "0",
                  "St": "0",
                  "Ct": "1",
                  "6s": "",
                  "4s": "",
                  "SR": "45.83",
                  "BF": "24",
                  "Ave": "5.50",
                  "HS": "10",
                  "Runs": "11",
                  "NO": "0",
                  "Inns": "2",
                  "Mat": "2"
              },
              "firstClass": {
                  "50": "0",
                  "100": "0",
                  "St": "0",
                  "Ct": "0",
                  "6s": "0",
                  "4s": "0",
                  "SR": "14.28",
                  "BF": "14",
                  "Ave": "2.00",
                  "HS": "2",
                  "Runs": "2",
                  "NO": "0",
                  "Inns": "1",
                  "Mat": "1"
              },
              "ODIs": {
                  "50": "0",
                  "100": "0",
                  "St": "0",
                  "Ct": "1",
                  "6s": "0",
                  "4s": "1",
                  "SR": "45.83",
                  "BF": "24",
                  "Ave": "5.50",
                  "HS": "10",
                  "Runs": "11",
                  "NO": "0",
                  "Inns": "2",
                  "Mat": "2"
              }
          }
      },
      "ttl": 2,
      "provider": {
          "source": "Various",
          "url": "https://cricapi.com/",
          "pubDate": "2019-11-11T12:38:45.026Z"
      },
      "creditsLeft": 250
  };
    restService = fixture.debugElement.injector.get(CricRestServiceService);
    fixture.detectChanges();
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
