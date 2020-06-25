import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {

  apiUrl = "https://coronapp-api.herokuapp.com/getAllUsers";
  
  constructor(private _http: HttpClient) { }

  getUsers(): Observable<any> {
    return this._http.get<User[]>(this.apiUrl);
  }
}
