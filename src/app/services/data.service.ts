import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {

  constructor(private httpclient: HttpClient) { }

  getUsers(): Observable<any> {
    return this.httpclient.get("http://jsonplaceholder.typicode.com/users")
  }
}
