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

import { CricLoginComponent } from './cric-login.component';
const testConfig = {
 
  error401: {
    error: {message: 'Unauthorized'},
    message: '',
    name: 'HttpErrorResponse',
    ok: false,
    status: 401,
    statusText: 'Forbidden',
    url: ''
  },
  positive: {
    token: 'token123'
  }
};
describe('CricLoginComponent', () => {
  let component: CricLoginComponent;
  let fixture: ComponentFixture<CricLoginComponent>;
  let restService:CricRestServiceService;
  let positiveResponse: any;
  let location: Location;
  //let routerService: any;
  let errorMessage: any;
  let debugElement: any;
  let element: any;
  let spyRegisteredUser: any;
  let spyRestService: any;
  let routerService: any;
  const routerSpy: any = {};
  let spyAuthenticateUser: any;
  let spySetBearerToken:any;
  let spyRouteToDashboard: any;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CricLoginComponent ],imports: [
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
    fixture = TestBed.createComponent(CricLoginComponent);
    component = fixture.componentInstance;
    restService = fixture.debugElement.injector.get(CricRestServiceService);
    routerService = fixture.debugElement.injector.get(CricRouterService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('should handle to login into the system', fakeAsync(() => {
  //   positiveResponse = testConfig.positive;
  //   spyAuthenticateUser = spyOn(restService, 'doLogin').and.returnValue(Observable.of(positiveResponse));
  //   const token = testConfig.positive.token;
  //  // sessionStorage.setItem('keeptoken', "asda");
  //   spySetBearerToken = spyOn(restService, 'setBearerToken').and.callFake(function(){

  //     sessionStorage.setItem('keeptoken', token);
  //   });
  //   spyRouteToDashboard = spyOn(routerService, 'routeToDashboard').and.callFake(function(){});
  //   const username = new FormControl('stranger');
  //   component.username = username;
  //   const password = new FormControl('password');
  //   component.password = password;
  //   component.loginSubmit();
  //   expect(sessionStorage.getItem('keeptoken')).toBe(token, 'should get token from session storage');
  // }));

  it('should handle incorrect login and password', fakeAsync(() => {
    errorMessage = testConfig.error401;
    component.submitMessage = ' ';
    fixture.detectChanges();
    debugElement = fixture.debugElement.query(By.css('.error-message'));
    spyAuthenticateUser = spyOn(restService, 'doLogin').and.returnValue(Observable.throw(errorMessage));

    const username = new FormControl('stranger');
    component.username = username;
    const password = new FormControl('password');
    component.password = password;
    component.loginSubmit();

    tick();
    fixture.detectChanges();
    if (debugElement !== null) {
      element = debugElement.nativeElement;
      expect(element.textContent).toBe(errorMessage.error.message,
        `should store 'err.error.message' in a varibale 'submitMessage' to show error on login page`);
    } else {
      expect(false).toBe(true,
        `should have an element  as <strong *ngIf="submitMessage" class="error-message">{{submitMessage}}</strong>
        in your login.component.html to show server errror response`);
    }
  }));


  
});
