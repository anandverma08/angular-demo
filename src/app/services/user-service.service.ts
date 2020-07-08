import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable, BehaviorSubject } from 'rxjs';
import { Iuser } from '../interfaces/users';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UserServiceService {
  users: Iuser[];
  private _prop: string = "Foo"
  public setSubject : BehaviorSubject<string>=new BehaviorSubject<string>(this._prop);
  constructor(private http: HttpClient) {
  }
  getUsersFromAPIObservable(): Observable<any> {
    return this.http.get<Iuser[]>('https://jsonplaceholder.typicode.com/users')
      .map(users => {
        return users.map(user => {
          return {
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email
          }
        })
      })

  }
  UpdateUser(user: Iuser): Observable<Iuser> {
    return this.http.post<Iuser>('https://jsonplaceholder.typicode.com/users', user);
  }

  setProp(prop: string): void {
    this._prop = prop
    this.setSubject.next('bar')
  }

  getProp(): string {
    return this._prop
  }
}
