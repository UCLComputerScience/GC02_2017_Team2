import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
 
export class User {
  firstName: string;
  lastName: string;
  email: string;
  type: string;
 
  constructor(firstName: string, lastName: string, email: string, type: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.type = type;
  }
}
 
@Injectable()
export class AuthService {
  currentUser: User;
 
  public login(credentials) {
    if (credentials.email === null || credentials.password === null || credentials.type === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        // REQUEST BACKEND HERE!
        let userEmail = "email"
        let userPassword = "pass"
        let access = (credentials.password === userPassword && credentials.email === userEmail);
        //  STORE BACKEND INFORMATION HERE
        let firstName = 'Samantha';
        let lastName = 'Watson';
        let email = 's.watson@ucl.ac.uk';
        let typee = credentials.type;
        this.currentUser = new User(firstName, lastName, email, typee);
        observer.next(access);
        observer.complete();
      });
    }
  }
 
  public getUserInfo() : User {
    return this.currentUser;
  }
 
  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}