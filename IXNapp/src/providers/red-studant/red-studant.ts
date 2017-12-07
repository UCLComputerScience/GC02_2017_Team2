import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/from';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RedStudantProvider {

  constructor(public http: Http) {
    console.log('Hello RedStudantProvider Provider');
  }

  getStudentNames() {

  	return this.http.get('http://localhost/StaffContactPHP/RedStudent.php').do((res: Response) => console.log(res)).map((res: Response) => res.json());

  }

}
