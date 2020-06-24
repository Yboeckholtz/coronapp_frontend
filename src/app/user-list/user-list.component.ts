import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  searchText;
  
  users: User[] = [
    new User( 1 , 'Jan', 'Janse', '01-02-2002', true , ['Sam']),
    new User( 2 , 'Kees', 'Komeet', '01-01-2000', false , ['Youri']),
  ];
  constructor() { }

  ngOnInit(): void {
  }


}
