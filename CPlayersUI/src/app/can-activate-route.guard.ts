import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CricRestServiceService } from './services/cric-rest-service.service';
import { CricRouterService } from './services/cric-router.service';
import { map } from 'rxjs/operators';

@Injectable()
export class CanActivateRouteGuard implements CanActivate {

  constructor(private cricRestService: CricRestServiceService, private routerService: CricRouterService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {



    return this.cricRestService.doValidate(this.cricRestService.getBearerToken()).pipe(
 
      map(response => {
        // console.log("response"+JSON.stringify(response));
        if (response['body']) {
          return true;
        }

      },
        error => {
          sessionStorage.removeItem("userName");
          return false;
        })
    );

  }
}
