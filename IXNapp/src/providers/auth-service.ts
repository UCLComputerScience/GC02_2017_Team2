import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HouseProvider } from './house/house';

 
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
  combo: any[] = [];


  constructor(public http: Http, public http2: Http, public http3: Http, public house: HouseProvider) {
  }
 
  public login(credentials) {
    if (credentials.email === null || credentials.password === null || credentials.type === null) {
      return Observable.throw("Please insert credentials");
    } else if (credentials.type == 'Student') {

        return Observable.create(observer => {

        var link = 'http://gc02team02app.azurewebsites.net/SQL/PassS.php';
        var myData = JSON.stringify({user: credentials.email, pass: credentials.password})

        this.http.post(link, myData).subscribe(dt => {
        if (dt["_body"]) {
        this.combo = JSON.parse(dt["_body"]);
        console.log(this.combo);

        let access = (credentials.password === this.combo[0].pass && credentials.email === this.combo[0].smail);
        let firstName = this.combo[0].fname;
        let lastName = this.combo[0].lname;
        let email = this.combo[0].smail;
        let typee = credentials.type;
        this.currentUser = new User(firstName, lastName, email, typee);

        this.house.setSID(this.combo[0].s_ID);

        observer.next(access);
        observer.complete();
        } else {
        let access = false;
        observer.next(access);
        observer.complete();
        }
      })
      })
    } else if (credentials.type == 'TA') {
      return Observable.create(observer => {
        
      var link2 = 'http://gc02team02app.azurewebsites.net/SQL/PassTA.php';
      var myData2 = JSON.stringify({user: credentials.email, pass: credentials.password})

      this.http2.post(link2, myData2).subscribe(dt => {
      if (dt["_body"]) {
      this.combo = JSON.parse(dt["_body"]);

      let access = (credentials.password === this.combo[0].tpass && credentials.email === this.combo[0].tmail);
      let firstName = this.combo[0].fname;
      let lastName = this.combo[0].lname;
      let email = this.combo[0].tmail;
      let typee = credentials.type;
      this.currentUser = new User(firstName, lastName, email, typee);

      this.house.setTAID(this.combo[0].t_ID);

      observer.next(access);
      observer.complete();
      } else {
      let access = false;
      observer.next(access);
      observer.complete();
      }
      })
      })
    } else if (credentials.type == 'Lecturer') {

      return Observable.create(observer => {
      var link3 = 'http://gc02team02app.azurewebsites.net/SQL/PassLE.php';
      var myData3 = JSON.stringify({user: credentials.email, pass: credentials.password})

      this.http3.post(link3, myData3).subscribe(dt => {
      if (dt["_body"]) {
      this.combo = JSON.parse(dt["_body"]);

      let access = (credentials.password === this.combo[0].lpass && credentials.email === this.combo[0].lmail);
      let firstName = this.combo[0].fname;
      let lastName = this.combo[0].lname;
      let email = this.combo[0].tlmail;
      let typee = credentials.type;
      this.currentUser = new User(firstName, lastName, email, typee);
      observer.next(access);
      observer.complete();
      } else {
      let access = false;
      observer.next(access);
      observer.complete();
      }
      })
      })
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

