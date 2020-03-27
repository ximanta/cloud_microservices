import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { User } from '../User';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'

})
export class CricRestServiceService {

  public name;
  public pid;
  public userName;
  public loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public favouriteList: Array<Object>;
  baseUrl = environment.baseUrl;
  //userServiceEndPoint = "http://localhost:8083";
  //favouriteServiceEndPoint =  "http://localhost:8084";
  //recoomendServiceEndpoint =  "http://localhost:8085";
  userServiceEndPoint = this.baseUrl+"/user-service";
  favouriteServiceEndPoint =  this.baseUrl+"/favourite-service";
  recomendServiceEndpoint =  this.baseUrl+"/recommend-service";
  constructor(private httpCleint: HttpClient) {
    if (sessionStorage.getItem("userName")) {
      this.loggedIn.next(true);
    }

  }

  public setBearerToken(token: string) {
    sessionStorage.setItem('keeptoken', token);
  }

  getBearerToken() {
    return sessionStorage.getItem('keeptoken');
    //return "21321wewqewqewqewqewq";
  }
  doRegister(user) {
    return this.httpCleint.post(this.userServiceEndPoint+"/api/v1/user/register/", user, { observe: 'response' });
  }

  doLogin(user) {
    return this.httpCleint.post(this.userServiceEndPoint+"/api/v1/user/login/", user, { observe: 'response' });
  }
  doValidate(token) {
    return this.httpCleint.post(this.userServiceEndPoint+"/api/v1/user/isAuthenticated/", token, { observe: 'response' });

  }
  doSearch() {


    return this.httpCleint.get("https://cricapi.com/api/playerFinder?apikey=INguKlqV0aOuJUCZ6CimhErHshg2&name=" + this.name, { observe: 'response' });
  }
  doPlayerView() {


    return this.httpCleint.get("http://cricapi.com/api/playerStats?apikey=INguKlqV0aOuJUCZ6CimhErHshg2&pid=" + this.pid, { observe: 'response' });
  }

  doLike(player) {
    let user = { "userName": sessionStorage.getItem("userName"), "faPlayers": [player] }

    return this.httpCleint.post(this.favouriteServiceEndPoint+"/api/v1/favourite/add/", user, {
      headers: new HttpHeaders().set(
        'Authorization', `Bearer ${this.getBearerToken()}`,
        
      ),
      observe: "response"

    });
  }

  doGetFavourites() {
    return this.httpCleint.get(this.favouriteServiceEndPoint+"/api/v1/favourite/get/" + sessionStorage.getItem("userName"), {
      headers: new HttpHeaders().set(
        'Authorization', `Bearer ${this.getBearerToken()}`
      ),
      observe: "response"

    });
  }
  doGetRecommends() {
    return this.httpCleint.get(this.recomendServiceEndpoint+"/api/v1/playerRecommend/get", {
      headers: new HttpHeaders().set(
        'Authorization', `Bearer ${this.getBearerToken()}`
      ),
      observe: "response"

    });
  }
}
