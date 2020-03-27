import { async, ComponentFixture, TestBed, fakeAsync, tick, inject, } from '@angular/core/testing';
import { FormsModule, FormControl } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CricRestServiceService } from '../services/cric-rest-service.service'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Location } from '@angular/common';
import { By } from '@angular/platform-browser';
import { CricRouterService } from '../services/cric-router.service';
import { Router, NavigationEnd } from '@angular/router';

import { RouterTestingModule } from '@angular/router/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BehaviorSubject } from 'rxjs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

import { CricPlayerListComponent } from './cric-player-list.component';

const eventsStub = new BehaviorSubject<Event>(null);
export class RouterStub {
  events = eventsStub;
}
const testConfig = {

  "data": [
    {
      "pid": 33757,
      "fullName": "Sachin Rana",
      "name": "Sachin Rana"
    }
  ]
}
describe('CricPlayerListComponent', () => {
  let component: CricPlayerListComponent;
  let fixture: ComponentFixture<CricPlayerListComponent>;
  let restService: CricRestServiceService;
  let positiveResponse: any;
  let location: Location;
  //let routerService: any;
  let errorMessage: any;
  let debugElement: any;
  let element: any;
  let spyDoSearch: any;
  let routerService: any;
  const routerSpy: any = {};
  let router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CricPlayerListComponent], imports: [
        FormsModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatFormFieldModule,
        MatInputModule,
        MatToolbarModule,
        MatCardModule,
        MatListModule,
        RouterTestingModule,
        MatTabsModule,
        MatDialogModule,
        MatSnackBarModule,
        MatTableModule,
        HttpClientModule,
        ReactiveFormsModule
      ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        CricRestServiceService,
        CricRouterService,
        { provide: Location, useValue: {} },
        { provide: Router, useClass: RouterStub }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CricPlayerListComponent);
    component = fixture.componentInstance;
    restService = fixture.debugElement.injector.get(CricRestServiceService);
    routerService = fixture.debugElement.injector.get(CricRouterService);
    router = TestBed.get(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should  list the player in a grid list', fakeAsync(() => {
    positiveResponse = testConfig.data;

    component.players = positiveResponse;
    fixture.detectChanges();
    tick();
    debugElement = fixture.debugElement.query(By.css('.cric-card'));
    expect(debugElement).toBeTruthy();
  }));
  it('should  have view button in player card', fakeAsync(() => {
    positiveResponse = testConfig.data;
    component.players = positiveResponse;
    fixture.detectChanges();
    tick();
    debugElement = fixture.debugElement.query(By.css('.cric-card'));
    let viewButton = debugElement.nativeElement.querySelector('button');
    expect(viewButton.textContent).toBe("View",
      "Player card Should have View button");
  }));
});
