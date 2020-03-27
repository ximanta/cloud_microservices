import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CricRestServiceService } from '../services/cric-rest-service.service'
@Component({
  selector: 'app-cric-register',
  templateUrl: './cric-register.component.html',
  styleUrls: ['./cric-register.component.css']
})
export class CricRegisterComponent implements OnInit {
  firstname = new FormControl('', Validators.required);
  lastname = new FormControl('', Validators.required);
  username = new FormControl('', Validators.required);
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);
  submitMessage = '';
  constructor(private cricRestService: CricRestServiceService) { }

  ngOnInit() {
  }

  public register() {
    let user = {
      "firstName": this.firstname.value,
      "lastName": this.lastname.value,
      "userName": this.username.value,
      "userPassword": this.password.value
    }

    this.cricRestService.doRegister(user).subscribe(

      response => {

        if (response.status === 200) {
          this.submitMessage = "User Registered";
        }

      },
      error => {
        if (error.status === 409) {
          this.submitMessage = 'UserName Conflicts With  An Existing User';
        } else {
          this.submitMessage = "User Failed To Register";
        }


      }
    )
  }
}
