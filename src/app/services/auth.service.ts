import {Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})



export class AuthService {
  private apiUrl = "https://coronapp-api.herokuapp.com/api";
  private httpOptions;
  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
  }


  register(username: string,  password: string, firstName: string, lastName: string, dateOfBirth: Date) {
    console.log("User " + username + " has been registered");
    this.http.post<any>(this.apiUrl + '/register', {
      username: username,
      password: password,
      firstName: firstName,
      lastName: lastName,
      dateOfBirth: dateOfBirth
    })
      .subscribe((res) => {
        localStorage.setItem("Token", res.token);
      },
        error => {
        console.log(error);
        })
  }

  loginUser(username: string, password: string){
    console.log("User: " + username + " has been logged in");
    this.http.post<any>(this.apiUrl + '/login', {username: username, password: password})
      .subscribe((res) => {
          localStorage.setItem("Token", res.token);
          localStorage.setItem("Username", username);
        },
        (error) => console.log(error)
      );
  }

  getUser(username: string) {
    this.http.get<any>(this.apiUrl)
  }


  logout() {
    localStorage.removeItem("Token");
    localStorage.removeItem("Username");

  }

  getToken() {
    return localStorage.getItem("Token");
  }

  isAuthenticated() {
    return localStorage.getItem("Token") !== null;
  }
}



    // private readonly JWT_TOKEN = 'JWT_TOKEN';
    // private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
    // private loggedUser: string;

    // constructor(private http: HttpClient){}

    // login(user: { username: string, password: string }) {
    //     this.http.post<any>('${config,apiUrl}/login', user)
    //       .subscribe(res => {
    //         localStorage.setItem('token', res.token);
    //       });
    //   }

// logout() {

// }

// isLoggedIn() {
//     return !!this.getJwtToken();
// }

// refreshToken() {
//     return this.http.post<any>('${config.apiUrl}/refresh', {
//         'refreshToken': this.getRefreshToken()
//     }).pipe(tap((tokens: Tokens) => {
//         this.storeJwtToken(tokens.jwt);
//     }));

// }

// getJwtToken(){
//     return localStorage.getItem(this.JWT_TOKEN);
// }

// private doLoginUser(username: string, tokens: Tokens){
//     this.loggedUser = username;
//     this.storeTokens(tokens);
// }

// // private doLogoutUser(){

// // }

// private getRefreshToken(){

// }

// private storeJwtToken(jwt: string){

// }

// private storeTokens(tokens: Tokens){
//     localStorage.setItem(this.JWT_TOKEN, tokens.jwt);
//     localStorage.setItem(this.REFRESH_TOKEN, tokens.refreshToken);
// }

// // private removeTokens(){
// //     localStorage.removeItem(this.JWT_TOKEN);
// //     localStorage.removeItem(this.REFRESH_TOKEN);
// // }
