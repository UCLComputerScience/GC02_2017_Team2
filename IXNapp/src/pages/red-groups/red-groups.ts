import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NgStyle } from '@angular/common';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HouseProvider } from '../../providers/house/house';

@Component({
  selector: 'page-red-groups',
  templateUrl: 'red-groups.html'
})
export class RedGroupsPage {

dt:any = {};
dt2:any = {};
wkn: number[] = [];
mx: number;
clicked: any = false;
Groups: any[];
RGroups: any[] = [];
Weeks: any[];
RWeeks: any[] = [];
Message: string;
	

  constructor(public navCtrl: NavController, public house: HouseProvider, public http: Http, public http2 : Http) {
  	this.Message = 'Press on a Student!';
  }

  ngOnInit() {
  	this.house.getAllRedTeam().subscribe(dt => {
  		this.Groups = JSON.parse(dt["_body"]);

  		for(let i in this.Groups){
  		this.wkn.push(this.Groups[i].weeknum);
  		}
  		this.mx = Math.max.apply(Math, this.wkn);

  		for(let k in this.Groups){
  		if(this.Groups[k].weeknum == this.mx && this.Groups[k].g_fb == 1) {
  			this.RGroups.push(this.Groups[k]);
  		}
  		}

  		if(this.RGroups.length == 0) {
  			this.Message = 'No Red Groups!';
  		}

  	})
  } 

onClick(gid : any) {
	this.RWeeks = [];
	this.clicked = true;

this.house.getAllRedTeam().subscribe(dt2 => {
	this.Weeks = JSON.parse(dt2["_body"]);
	for(let i in this.Weeks){
	if(this.Weeks[i].g_id == gid){
		this.RWeeks.push(this.Weeks[i]);
	}
	}
	for(let i = 0; i < this.RWeeks.length; i++){
		if(this.RWeeks[i].g_fb == 4){
			this.RWeeks[i].g_fb = "dark";
		} else if(this.RWeeks[i].g_fb == 3){
			this.RWeeks[i].g_fb = "light";
		} else if(this.RWeeks[i].g_fb == 2){
			this.RWeeks[i].g_fb = "secondary";
		} else if(this.RWeeks[i].g_fb == 1){
			this.RWeeks[i].g_fb = "danger";
		}
	}
})

 	}

}
