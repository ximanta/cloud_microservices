import { async, ComponentFixture, TestBed, fakeAsync, tick, inject} from '@angular/core/testing';
import { FormsModule, FormControl } from '@angular/forms';

import { CricRestServiceService } from '../services/cric-rest-service.service'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Location } from '@angular/common';
import { By } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import {CricRouterService} from  '../services/cric-router.service';
import { Router } from '@angular/router';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';

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

import { CricSearchComponent } from './cric-search.component';

describe('CricSearchComponent', () => {
  let component: CricSearchComponent;
  let fixture: ComponentFixture<CricSearchComponent>;
  let restService:CricRestServiceService;
  let searchButton: any;
  let inputBox: any;
  let positiveResponse: any;
  let location: Location;
  //let routerService: any;
  let errorMessage: any;
  let debugElement: any;
  let element: any;
  let spyDoSearch: any;
  let routerService: any;
  const routerSpy: any = {};
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CricSearchComponent ],imports: [
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
    fixture = TestBed.createComponent(CricSearchComponent);
    component = fixture.componentInstance;
    restService = fixture.debugElement.injector.get(CricRestServiceService);
    routerService = fixture.debugElement.injector.get(CricRouterService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should  have input box for player name and serach button', () => {
    searchButton = fixture.debugElement.nativeElement.querySelector('button');
    inputBox = fixture.debugElement.nativeElement.querySelector('input');
    expect(inputBox!==null).toBeTruthy("Should have input box for player name");
    expect(searchButton.textContent).toBe("Search",
    "Should have search button");
});
  
it('Should trigger  search player ', fakeAsync(() => {
  //positiveResponse = testConfig.search["data"];
  searchButton = fixture.debugElement.nativeElement.querySelector('button');
  inputBox = fixture.debugElement.nativeElement.querySelector('input');
  spyDoSearch = spyOn(component, 'doSearch').and.callFake(function(){});
  fixture.detectChanges();
  //tick();
  if (inputBox !== null&& searchButton !== null) {
    const playerName = new FormControl('sachin');
    component.pName=playerName;
    fixture.detectChanges();
    searchButton.click();
   // tick();
    fixture.detectChanges();
    expect(component.doSearch).toHaveBeenCalled();
  }
}));
});
