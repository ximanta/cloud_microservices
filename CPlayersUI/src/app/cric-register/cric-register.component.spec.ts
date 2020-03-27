import { async, ComponentFixture, TestBed, fakeAsync, tick, inject} from '@angular/core/testing';
import { FormsModule, FormControl } from '@angular/forms';
import { CricRegisterComponent } from './cric-register.component';
import { CricRestServiceService } from '../services/cric-rest-service.service'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Location } from '@angular/common';
import { By } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import {CricRouterService} from  '../services/cric-router.service';
import { Router } from '@angular/router';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
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
const testConfig = {
  error404: {
    message: '',
    name: 'HttpErrorResponse',
    ok: false,
    status : 404,
    statusText: 'Not Found',
    url: 'http://localhost:3000/auth/v1'
  },
 
  success: {
    message: 'User Registered',
    name: 'HttpSuccessResponse',
    ok: true,
    status : 200,
    statusText: 'Not Found',
    url: 'http://localhost:3000/auth/v1'
  }
};

describe('CricRegisterComponent', () => {
  let component: CricRegisterComponent;
  let restService:CricRestServiceService;
  let fixture: ComponentFixture<CricRegisterComponent>;
  let positiveResponse: any;
  let location: Location;
  //let routerService: any;
  let errorMessage: any;
  let debugElement: any;
  let element: any;
  let spyRegisteredUser: any;
  let routerService: any;
  const routerSpy: any = {};
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CricRegisterComponent ],imports: [
        FormsModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatAutocompleteModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatMenuModule,
        MatSidenavModule,
        MatToolbarModule,
        MatCardModule,
        MatExpansionModule,
        MatGridListModule,
        MatListModule,
        MatStepperModule,
        MatTabsModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatChipsModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatDialogModule,
        MatSnackBarModule,
        MatTooltipModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
        HttpClientModule,
        ReactiveFormsModule
        ],
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
    fixture = TestBed.createComponent(CricRegisterComponent);
    component = fixture.componentInstance;
    restService = fixture.debugElement.injector.get(CricRestServiceService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('User should be able to register', fakeAsync(() => {
    positiveResponse = testConfig.success;
    component.submitMessage = ' ';
    fixture.detectChanges();
    debugElement = fixture.debugElement.query(By.css('.error-message'));
    spyRegisteredUser = spyOn(restService, 'doRegister').and.returnValue(Observable.of(positiveResponse));
    const firstName = new FormControl('firstName');
    component.firstname = firstName;
    const lastName = new FormControl('lastName');
    component.lastname = lastName;
    const userName = new FormControl('fiuserNamerstName');
    component.username = userName;
    const password = new FormControl('password');
    component.password = password;
    component.register();
    tick();
    fixture.detectChanges();
    if (debugElement !== null) {
      element = debugElement.nativeElement;
      expect(element.textContent).toBe(positiveResponse.message,
        `should store sucess message in a varibale 'submitMessage' to show success on register page`);
    } else {
      expect(false).toBe(true,
        `should have an element  as <strong *ngIf="submitMessage" class="error-message">{{submitMessage}}</strong>
        in your register component.html to show server response`);
    }
  }));
});
