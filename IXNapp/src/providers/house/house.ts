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

  TAID: number;
  SID: number;
  Lect: number;


  constructor(public http: Http, public http2: Http, public http3: Http, public http4: Http, public http5: Http, public http6: Http, public http7: Http, public http8: Http, public http9: Http, public http10: Http, public http11: Http, public http12: Http, public http13: Http) {
    console.log('Hello HouseProvider Provider');
  }

  getAllRedStudent() {

  	var link1 = 'http://gc02team02app.azurewebsites.net/SQL/RedStudentInit.php/';
	var myData1 = JSON.stringify({teachID: this.TAID, lect: this.Lect})

 	return this.http.post(link1, myData1);

  }

  getAllRedTeam() {
  	var link2 = 'http://gc02team02app.azurewebsites.net/SQL/RedGroupsInit.php';
	var myData2 = JSON.stringify({teachID: this.TAID, lect: this.Lect})

 	return this.http2.post(link2, myData2);
  }

  GetStage2Student() {
    	var link3 = 'http://gc02team02app.azurewebsites.net/SQL/Stage2StudentPrelim.php';
  	var myData3 = JSON.stringify({teachID: this.TAID, lect: this.Lect})

  	return this.http3.post(link3, myData3);
  }
	
  getStaffCon(){

        return this.http4.get('http://gc02team02app.azurewebsites.net/SQL/Staff%20Contact.php').do((res: Response) => console.log(res)).map((res: Response) => res.json());
  }

  GetStudentAdd() {
      var link4 = 'http://gc02team02app.azurewebsites.net/SQL/Stage2StudentAdd.php';
    var myData4 = JSON.stringify({teachID: this.TAID, lect: this.Lect})

    return this.http5.post(link4, myData4);
  }

  GetStudentHome() {
      var link5 = 'http://gc02team02app.azurewebsites.net/SQL/StudentHome.php';
    var myData5 = JSON.stringify({studID: this.SID})

    return this.http6.post(link5, myData5);
  }
	
  MoreDets() {
      var link6 = 'http://gc02team02app.azurewebsites.net/SQL/MoreDets.php';
    var myData6 =  JSON.stringify({teachID: this.TAID, lect: this.Lect})

    return this.http7.post(link6, myData6);
  }

  MoreDetsS() {
      var link7 = 'http://gc02team02app.azurewebsites.net/SQL/MoreDetsS.php';
    var myData7 =  JSON.stringify({studID: this.SID})

    return this.http8.post(link7, myData7);
  }

  GetGroupCon() {
      var link8 = 'http://gc02team02app.azurewebsites.net/SQL/Group%20Contact.php';
    var myData8 =  JSON.stringify({teachID: this.TAID, lect: this.Lect})

    return this.http9.post(link8, myData8);
  }

  GetSuper() {
      var link9 = 'http://gc02team02app.azurewebsites.net/SQL/Supervisor%20Contact.php';
    var myData9 =  JSON.stringify({teachID: this.TAID, lect: this.Lect})

    return this.http10.post(link9, myData9);
  }
	
  GetSuper2() {
      var link10 = 'http://gc02team02app.azurewebsites.net/SQL/Supervisor%20Contact2.php';
    var myData10 =  JSON.stringify({teachID: this.TAID, lect: this.Lect})

    return this.http12.post(link10, myData10);
  }

  GetGroupCon2() {
      var link11 = 'http://gc02team02app.azurewebsites.net/SQL/SC.php';
    var myData11 =  JSON.stringify({teachID: this.TAID, lect: this.Lect})

    return this.http13.post(link11, myData11);
  }

  getDead(){

      return this.http11.get('http://gc02team02app.azurewebsites.net/SQL/Deadline.php').do((res: Response) => console.log(res)).map((res: Response) => res.json());
  }

  setSID(userID){
       this.SID = userID; 
   }

  setTAID(userID){
       this.TAID = userID; 
   }

   setLect(userID: number){
       this.Lect = userID; 
   }


}
