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
import { BehaviorSubject } from 'rxjs';

import { CricHeaderComponent } from './cric-header.component';
const eventsStub = new BehaviorSubject<Event>(null);
    export class RouterStub {
      events = eventsStub;
    }
describe('CricHeaderComponent', () => {
  let component: CricHeaderComponent;
  let fixture: ComponentFixture<CricHeaderComponent>;
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
  let router;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CricHeaderComponent ],imports: [
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
        { provide: Router,  useClass: RouterStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CricHeaderComponent);
    component = fixture.componentInstance;
    restService = fixture.debugElement.injector.get(CricRestServiceService);
    router = TestBed.get(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should handle navigation to favourite players view', fakeAsync(() => {
  //   debugElement = fixture.debugElement.query(By.('Login'));
  //   //debugElement= fixture.debugElement.nativeElement.querySelector('a');
  //   if (debugElement) {
  //     element = debugElement.nativeElement;
  //     element.click();
  //     tick();
  //     expect(location.path()).toContain('/dashboard/view/listview',
  //       `should navigate to list view page`);
  //   } else {
  //     expect(false).toBe(true,
  //       `should have an element with class 'switchToListView' in your header.component.html`);
  //   }
  // }));

  // it('should handle navigation to note view', fakeAsync(() => {
  //   component.isNoteView = false;
  //   fixture.detectChanges();
  //   debugElement = fixture.debugElement.query(By.css('.switchToNoteView'));
  //   if (debugElement) {
  //     element = debugElement.nativeElement;
  //     element.click();
  //     tick();
  //     expect(location.path()).toContain('/dashboard/view/noteview',
  //       `should navigate to note view page`);
  //   } else {
  //     expect(false).toBe(true,
  //       `should have an element with class 'switchToNoteView' in your header.component.html`);
  //   }
  // }));
});
