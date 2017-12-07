import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NgStyle } from '@angular/common';
import { Http, Headers, RequestOptions } from '@angular/http';

import { RedStudantProvider } from '../../providers/red-studant/red-studant'

@Component({
  selector: 'page-red-students',
  templateUrl: 'red-students.html'

})

export class RedStudentsPage {

data:any = {};
data2:any = {};
Students: object[];
RedWeeks: any[];
Contribution: any[];
TAID: number;
	

  constructor(public navCtrl: NavController, public redstudantprovider: RedStudantProvider, public http: Http, public http2 : Http) {
  	this.data.fname = '';
  	this.data.lname = '';
  	this.data.response = '';
  	this.TAID = 1;
  	this.getStudentNames(this.TAID);

  }


 getStudentNames(TAID: number) {
 	var link1 = 'http://gc02team02app.azurewebsites.net/SQL/RedStudentInit.php/';
	var myData1 = JSON.stringify({teachID: TAID})

 	this.http2.post(link1, myData1).subscribe(data2 => {
		this.Students = JSON.parse(data2["_body"]);   /* data["_body"] */
		console.log(this.Students);
	}, error => {
		console.log("Oooooops!");
	});
 }


onClick(first : any, last: any) {
	console.log(first);
	console.log(last);

	var link = 'http://gc02team02app.azurewebsites.net/SQL/RedStudentReceive.php/';
	var myData = JSON.stringify({studentfirstname: first, studentlastname: last})

	this.http.post(link, myData).subscribe(data => {
		this.RedWeeks = JSON.parse(data["_body"]);   /* data["_body"] */
		for(let i = 0; i < this.RedWeeks.length; i++){
		if(this.RedWeeks[i].st_fb == 4){
			this.RedWeeks[i].st_fb = "dark";
		} else if(this.RedWeeks[i].st_fb == 3){
			this.RedWeeks[i].st_fb = "light";
		} else if(this.RedWeeks[i].st_fb == 2){
			this.RedWeeks[i].st_fb = "secondary";
		} else if(this.RedWeeks[i].st_fb == 1){
			this.RedWeeks[i].st_fb = "danger";
		}
	}
		console.log(this.RedWeeks);
	}, error => {
		console.log("Oooooops!");
	});
this.Contribution = ["Contribution"];
 	}
}
