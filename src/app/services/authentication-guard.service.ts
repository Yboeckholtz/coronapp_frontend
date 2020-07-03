import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import { Injectable } from '@angular/core';
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuardService implements CanActivate{

  constructor(private authenticationService: AuthService, private route: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.authenticationService.isAuthenticated()) {
      this.route.navigate(['/login'])
    }
    return this.authenticationService.isAuthenticated();
  }


}