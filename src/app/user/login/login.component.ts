import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import { Location } from "@angular/common";
import { AuthService } from "../../services/auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  profileForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
});

  constructor(private userService : UserService, private router: Router, private route: ActivatedRoute, private authService: AuthService, private location: Location) { }
  
  ngOnInit(): void {
  }



onSubmit() {
  let username = this.profileForm.controls.username.value;
  let password = this.profileForm.controls.password.value;
  this.authService.loginUser(username, password);
  this.router.navigate(["/overview"]);
  // this.authService.loginUser(this.profileForm.controls['username'].value, this.profileForm.controls['password'].value);
}
}
