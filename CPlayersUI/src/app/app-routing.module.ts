import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CricLoginComponent} from './cric-login/cric-login.component';
import {CricRegisterComponent} from './cric-register/cric-register.component';
import {CricDashboardComponent} from './cric-dashboard/cric-dashboard.component';
import {CricPlayerListComponent} from './cric-player-list/cric-player-list.component';
import { CanActivateRouteGuard } from './can-activate-route.guard';
import { CricPlayerViewComponent } from './cric-player-view/cric-player-view.component';
import {CricFavourListComponent} from './cric-favour-list/cric-favour-list.component';
import {CricRecomListComponent} from './cric-recom-list/cric-recom-list.component';
const routes: Routes = [
  {
    path: '',
    component: CricLoginComponent
  },
  {
    path: 'login',
    component: CricLoginComponent
  },
  {
    path: 'register',
    component: CricRegisterComponent
  },
  {
    path: 'favPlayerList',
    component: CricFavourListComponent,
    canActivate: [CanActivateRouteGuard]
  },
  {
    path: 'recPlayerList',
    component: CricRecomListComponent,
    canActivate: [CanActivateRouteGuard]
  },
  {
    path: 'viewPlayer',
    component: CricPlayerViewComponent,
    canActivate: [CanActivateRouteGuard]
  },
  {
    path: 'dashboard',
    component: CricDashboardComponent,
    canActivate: [CanActivateRouteGuard],
    //runGuardsAndResolvers:'always',
    children: [
    {
      path: 'view/searchview',
      component: CricPlayerListComponent
    }]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
