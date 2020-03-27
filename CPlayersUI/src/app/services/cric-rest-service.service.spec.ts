import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { CricRestServiceService } from './cric-rest-service.service';

describe('CricRestServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule(  {imports: [HttpClientModule]}));

  it('should be created', () => {
    const service: CricRestServiceService = TestBed.get(CricRestServiceService);
    expect(service).toBeTruthy();
  });
});
