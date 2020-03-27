import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CricRestServiceService } from '../services/cric-rest-service.service';
import { CricRouterService } from '../services/cric-router.service';
//import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-cric-login',
  templateUrl: './cric-login.component.html',
  styleUrls: ['./cric-login.component.css']
})
export class CricLoginComponent implements OnInit {

  username = new FormControl('', Validators.required);
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);
  submitMessage = '';


  constructor(private cricRestService: CricRestServiceService, private routerService: CricRouterService) { }

  ngOnInit() {
  }

  loginSubmit() {
    const user = {
      userName: this.username.value,
      userPassword: this.password.value,
    };
    this.cricRestService.doLogin(user).subscribe(

      response => {
        if (response.status === 200) {
          //console.log("response"+JSON.stringify(response));
          this.cricRestService.setBearerToken(response.body['token']);
          this.cricRestService.userName = user.userName;
          sessionStorage.setItem("userName", user.userName);
          console.log("inside token "+this.cricRestService.getBearerToken())
          this.cricRestService.loggedIn.next(true);
          this.routerService.routeToDashboard();
        }

      },
      error => {
        if (error.status === 409){
          this.submitMessage = 'userName conflicts with an existing user';
         } else if(error.status === 401) {
           this.submitMessage="Unauthorized"
         }else{

          this.submitMessage = "User Not exist";
         }

        }
      
    )


    // this.authService.authenticateUser(user).subscribe(
    //   data => {

    //     this.authService.setBearerToken(data['token']);

    //     this.routeService.routeToDashboard();

    //   },
    //   error => {
    //     if ('Http failure response for http://localhost:3000/auth/v1/: 403 Forbidden' === error.message) {
    //       this.submitMessage = 'Unauthorized';
    //     } else {
    //       this.submitMessage = error.message;
    //     }
    //   }
    // );


  }
}
