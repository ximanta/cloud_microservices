import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CricLoginComponent } from './cric-login/cric-login.component';
import { CricHeaderComponent } from './cric-header/cric-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';

import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {  MatSidenavModule } from "@angular/material";
import { MatCardModule } from '@angular/material/card';
import { CricRegisterComponent } from './cric-register/cric-register.component';
import { CricDashboardComponent } from './cric-dashboard/cric-dashboard.component';
import { CanActivateRouteGuard } from './can-activate-route.guard';
import { CricSearchComponent } from './cric-search/cric-search.component';
import { CricPlayerListComponent } from './cric-player-list/cric-player-list.component';
import { CricPlayerViewComponent } from './cric-player-view/cric-player-view.component';
import { CricFavourListComponent } from './cric-favour-list/cric-favour-list.component';
import { CricRecomListComponent } from './cric-recom-list/cric-recom-list.component';
import { CricLoaderComponent } from './cric-loader/cric-loader.component';


@NgModule({
  declarations: [
    AppComponent,
    CricLoginComponent,
    CricHeaderComponent,
    CricRegisterComponent,
    CricDashboardComponent,
    CricSearchComponent,
    CricPlayerListComponent,
    CricPlayerViewComponent,
    CricFavourListComponent,
    CricRecomListComponent,
    CricLoaderComponent
  ],
  imports: [
    MatSnackBarModule, MatTableModule, MatIconModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule, MatProgressSpinnerModule,
    BrowserModule, FormsModule, ReactiveFormsModule,
    AppRoutingModule,MatSidenavModule,
    MatExpansionModule, MatGridListModule,
    BrowserAnimationsModule, HttpClientModule, MatListModule
  ],
  providers: [CanActivateRouteGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
