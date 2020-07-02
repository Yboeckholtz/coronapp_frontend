import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn:'root'
})
export class UserService {
  readonly rootUrl = 'https://coronapp-api.herokuapp.com/api';
  constructor(private http: HttpClient) { }

userAuthentication(userName, password){
  var data = "username="+userName+"&password="+password;
  var reqHeader = new HttpHeaders({'Content-Type':'application/x-www-urlencoded'});
  return this.http.post(this.rootUrl+'/login', data, {headers: reqHeader})
}
}