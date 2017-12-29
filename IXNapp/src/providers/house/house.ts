import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/from';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { Http, Headers, RequestOptions } from '@angular/http';


@Injectable()
export class HouseProvider {

	TAID: number = 1; /* I assume I know this here */
  SID: number = 1;

  constructor(public http: Http, public http2: Http, public http3: Http, public http4: Http, public http5: Http, public http6: Http) {
    console.log('Hello HouseProvider Provider');
  }

  getAllRedStudent() {

  	var link1 = 'http://gc02team02app.azurewebsites.net/SQL/RedStudentInit.php/';
	var myData1 = JSON.stringify({teachID: this.TAID})

 	return this.http.post(link1, myData1);

  }

  getAllRedTeam() {
  	var link2 = 'http://gc02team02app.azurewebsites.net/SQL/RedGroupsInit.php';
	var myData2 = JSON.stringify({teachID: this.TAID})

 	return this.http2.post(link2, myData2);
  }

  GetStage2Student() {
    	var link3 = 'http://gc02team02app.azurewebsites.net/SQL/Stage2StudentPrelim.php';
  	var myData3 = JSON.stringify({teachID: this.TAID})

  	return this.http3.post(link3, myData3);
  }
	
  getStaffCon(){

        return this.http4.get('http://gc02team02app.azurewebsites.net/SQL/Staff%20Contact.php').do((res: Response) => console.log(res)).map((res: Response) => res.json());
  }

  GetStudentAdd() {
      var link4 = 'http://gc02team02app.azurewebsites.net/SQL/Stage2StudentAdd.php';
    var myData4 = JSON.stringify({teachID: this.TAID})

    return this.http5.post(link4, myData4);
  }

  GetStudentHome() {
      var link5 = 'http://gc02team02app.azurewebsites.net/SQL/StudentHome.php';
    var myData5 = JSON.stringify({studID: this.SID})

    return this.http6.post(link5, myData5);
  }


}
