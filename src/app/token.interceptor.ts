// import { Injectable } from "@angular/core";
// import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
// import { BehaviorSubject, Observable, throwError } from 'rxjs';
// import { AuthService } from './auth.service';

// @Injectable()
// export class TokenINterceptor implements HttpInterceptor {

//     private isRefreshing = false; 
//     private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>;

//     constructor(public authService: AuthService) {}

//     intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent>{

//         if(this.authService.getJwtToken()) {
//             request = this.addToken(request, this.authService.getJwtToken());
//         }

//         return next.handle(request).pipe(catchError(error => {
//             if(error instanceof HttpErrorResponse && error.status === 401) {
//                 return this.handle401Error(request, next);
//             } else {
//                 return throwError(error);
//             }
//         }));
//     }

//     private addToken(request: HttpRequest<any>, token: string) {
//         return request.clone({
//             setHeaders: {
//                 'Authorization': `Bearer ${token}`
//             }
//         });
//     }

//     private handle401Error(request: )
// }