import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { CricRouterService } from './cric-router.service';
//import { Location ,LocationStrategy} from '@angular/common';

describe('CricRouterService', () => {
  const routerSpy: any = {};
  beforeEach(() => TestBed.configureTestingModule({providers: [
    
  //  Location,LocationStrategy,
    { provide: Router, useValue: routerSpy }
    ]}));

  it('should be created', () => {
    const service: CricRouterService = TestBed.get(CricRouterService);
    expect(service).toBeTruthy();
  });
});
