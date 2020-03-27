import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CricRouterService {

  constructor(private router: Router) { }

  routeToLogin() {
    this.router.navigate(['login']);
  }

  routeToDashboard() {
    this.router.navigate(['dashboard']);
  }

  routeToSearchView() {
    this.router.navigate(['dashboard/view/searchview']);
  }
  routeToPlayerView() {
    this.router.navigate(['viewPlayer']);
  }
  routeBack() {
    this.router.navigate(['dashboard']);
  }
  routeToEditNoteView(noteId) {
    this.router.navigate([
      'dashboard',
      {
        outlets: {
          noteEditOutlet: ['note', noteId, 'edit']
        }
      }
    ]);
  }
}