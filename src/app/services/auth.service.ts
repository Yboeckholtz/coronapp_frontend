// import { AuthService } from "../auth.service"
// import { HttpClient } from '@angular/common/http';
// import { Observable, of } from 'rxjs';

// export classs AuthService {

//     private readonly JWT_TOKEN = 'JWT_TOKEN';
//     private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
//     private loggedUser: string;

//     constructor(private http: HttpClient){}

// login(user: { username: string, password: stirng }): Observable<boolean> {
//     return this.http.post<any>('${config,apiUrl}/login', user)
//     .pipe(
//         tap(tokens => this.doLoginUser(user.username, tokens)),
//         mapTo(true),
//         catchError(error => {
//             alert(error.error);
//             return of(false);
//         }));
//     }

// // logout() {

// // }

// isLoggedIn() {

// }

// refreshToken() {
//     return this.http.post<any>('${config.apiUrl}/refresh', {
//         'refreshToken': this.getRefreshToken()
//     }).pipe(tap((tokens: Tokens) => {
//         this.storeJwtToken(tokens.jwt);
//     }));

// }

// getJwtToken(){

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
