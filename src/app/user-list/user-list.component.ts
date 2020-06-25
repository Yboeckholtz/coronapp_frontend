import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  searchText;
  users$: User[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    return this.dataService.getUsers()
    .subscribe(data => this.users$ = data);
  }


}
