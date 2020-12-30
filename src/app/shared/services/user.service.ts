import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public users: BehaviorSubject<string[]> = new BehaviorSubject(['POE', 'COUCHUT']);

  constructor() {
  }

  addUser(userName: string) {
    this.users.value.push(userName);
  }
}
