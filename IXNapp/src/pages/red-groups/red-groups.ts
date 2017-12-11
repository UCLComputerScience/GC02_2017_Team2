import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NgStyle } from '@angular/common';
import { Http, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'page-red-groups',
  templateUrl: 'red-groups.html'
})
export class RedGroupsPage {

data:any = {};
data2:any = {};
RedWeeks: any[];
RedGroups: object[];
TAID: number;

  constructor(public navCtrl: NavController, public http: Http, public http2 : Http) {
  this.TAID = 1;
  this.getGroupNames(this.TAID);

  }

  getGroupNames(TAID: number) {
 	var link1 = 'http://gc02team02app.azurewebsites.net/SQL/RedGroupsInit.php/';
	var myData1 = JSON.stringify({teachID: TAID})

 	this.http2.post(link1, myData1).subscribe(data2 => {
		this.RedGroups = JSON.parse(data2["_body"]);   /* data["_body"] */
		console.log(this.RedGroups);
	}, error => {
		console.log("Oooooops!");
	});
 }

 onClick(G : any) {
	console.log(G);

	var link = 'http://gc02team02app.azurewebsites.net/SQL/RedGroupReceive.php/';
	var myData = JSON.stringify({grID: G})

	this.http.post(link, myData).subscribe(data => {
		this.RedWeeks = JSON.parse(data["_body"]);   /* data["_body"] */
		for(let i = 0; i < this.RedWeeks.length; i++){
		if(this.RedWeeks[i].g_fb == 4){
			this.RedWeeks[i].g_fb = "dark";
		} else if(this.RedWeeks[i].g_fb == 3){
			this.RedWeeks[i].g_fb = "light";
		} else if(this.RedWeeks[i].g_fb == 2){
			this.RedWeeks[i].g_fb = "secondary";
		} else if(this.RedWeeks[i].g_fb == 1){
			this.RedWeeks[i].g_fb = "danger";
		}
	}
		console.log(this.RedWeeks);
	}, error => {
		console.log("Oooooops!");
	});
 	}

}
