import { async, ComponentFixture, TestBed, fakeAsync, tick, inject } from '@angular/core/testing';
import { FormsModule, FormControl } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CricRestServiceService } from '../services/cric-rest-service.service'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Location } from '@angular/common';
import { By } from '@angular/platform-browser';
import { CricRouterService } from '../services/cric-router.service';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

import { CricRecomListComponent } from './cric-recom-list.component';
const testConfig = {

  "data": [
    {
      "playerId": 33757,
      "playerName": "Sachin Rana",
      "likes": "1"
    }
  ]
}
describe('CricRecomListComponent', () => {
  let component: CricRecomListComponent;
  let fixture: ComponentFixture<CricRecomListComponent>;
  let restService: CricRestServiceService;
  let positiveResponse: any;
  let location: Location;
  //let routerService: any;
  let errorMessage: any;
  let debugElement: any;
  let element: any;
  let spyOnGetRecommend: any;
  let routerService: any;
  const routerSpy: any = {};
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CricRecomListComponent], imports: [
        FormsModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatFormFieldModule,
        MatInputModule,
        MatToolbarModule,
        MatCardModule,
       MatGridListModule,
        MatListModule,
       MatTabsModule,
       MatDialogModule,
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
    fixture = TestBed.createComponent(CricRecomListComponent);
    component = fixture.componentInstance;
    restService = fixture.debugElement.injector.get(CricRestServiceService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should  have tool bar with recommended player', fakeAsync(() => {
    positiveResponse = testConfig.data;

    component.recommList = positiveResponse;
    fixture.detectChanges();
    tick();
    debugElement = fixture.debugElement.query(By.css('mat-toolbar'));
    expect(debugElement.nativeElement.textContent).toEqual("Recommended Players");
  }));
  it('should  have a table with recommended players', fakeAsync(() => {
    positiveResponse = testConfig.data;

    component.recommList = positiveResponse;
    fixture.detectChanges();
    tick();
    debugElement = fixture.debugElement.query(By.css('table'));
    expect(debugElement).toBeTruthy();
  }));
  it('should  have called rest service for recommeded payer list', fakeAsync(() => {
    positiveResponse = testConfig.data;
    spyOnGetRecommend= spyOn(restService, 'doGetRecommends').and.returnValue(Observable.of( testConfig.data));
    fixture.detectChanges();
    tick();
    component.ngOnInit();
    expect(restService.doGetRecommends).toHaveBeenCalled();
  }));
});
