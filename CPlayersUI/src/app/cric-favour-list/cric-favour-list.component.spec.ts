import { async, ComponentFixture, TestBed, fakeAsync, tick, inject } from '@angular/core/testing';
import { FormsModule, FormControl } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CricRestServiceService } from '../services/cric-rest-service.service'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Location } from '@angular/common';
import { By } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { CricRouterService } from '../services/cric-router.service';
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

import { CricFavourListComponent } from './cric-favour-list.component';
const testConfig = {

  "data":
  {
    "userName": "test",
    "faPlayers": [{
      "playerId": 33757,
      "playerName": "Sachin Rana"
    }]
  }

}
describe('CricFavourListComponent', () => {
  let component: CricFavourListComponent;
  let fixture: ComponentFixture<CricFavourListComponent>;
  let restService: CricRestServiceService;
  let positiveResponse: any;
  let location: Location;
  //let routerService: any;
  let errorMessage: any;
  let debugElement: any;
  let element: any;
  let spyOnGetFavourite: any;
  let routerService: any;
  const routerSpy: any = {};
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CricFavourListComponent]
      , imports: [
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
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CricFavourListComponent);
    component = fixture.componentInstance;
    restService = fixture.debugElement.injector.get(CricRestServiceService);
    routerService = fixture.debugElement.injector.get(CricRouterService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should  have tool bar with favourite player', fakeAsync(() => {
    positiveResponse = testConfig.data.faPlayers;

    component.favourList = positiveResponse;
    fixture.detectChanges();
    tick();
    debugElement = fixture.debugElement.query(By.css('mat-toolbar'));
    expect(debugElement.nativeElement.textContent).toEqual("Your Favouritess");
  }));



  it('should  have table with favourite player', fakeAsync(() => {
    positiveResponse = testConfig.data.faPlayers;

    component.favourList = positiveResponse;
    fixture.detectChanges();
    tick();
    debugElement = fixture.debugElement.query(By.css('table'));
    expect(debugElement).toBeTruthy();
  }));

  it('should  have called rest service for favourite payer list', fakeAsync(() => {
    positiveResponse = testConfig.data.faPlayers;
    spyOnGetFavourite= spyOn(restService, 'doGetFavourites').and.returnValue(Observable.of( testConfig.data));
    fixture.detectChanges();
    tick();
    component.ngOnInit();
    expect(restService.doGetFavourites).toHaveBeenCalled();
  }));
});
