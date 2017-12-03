import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/from';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class StaffContakProvider {

constructor(public http: Http) {
	console.log('Hello Provider');
  
}


  getStaffCon(){

  	return this.http.get('http://localhost/StaffContactPHP/Staff%20Contact.php').do((res: Response) => console.log(res)).map((res: Response) => res.json());

    }


}
