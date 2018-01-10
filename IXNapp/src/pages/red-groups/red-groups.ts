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
RIWeeks: any[] = [];
wknraw: any[] = [];
	

  constructor(public navCtrl: NavController, public house: HouseProvider, public http: Http, public http2 : Http) {
  	this.Message = 'Press on a Group!';
  }

  ngOnInit() {
  	this.house.getAllRedTeam().subscribe(dt => {
    if (dt["_body"]) {
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

      } else {
        this.Message = 'No Red Groups!';
      }
  	})
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    this.Message = 'Press on a Group!';

    this.dt = {};
    this.wkn = [];
    this.mx = 0;
    this.clicked = false;
    this.Groups = [];
    this.RGroups = [];

    this.house.getAllRedTeam().subscribe(dt => {
    if (dt["_body"]) {
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
      } else {
      this.Message = 'No Red Groups!';
      }
    })

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  } 

onClick(gid : any) {
	this.RWeeks = [];
  this.RIWeeks = [];
	this.clicked = true;
  this.Weeks = [];
	this.wknraw = [];

this.house.getAllRedTeam().subscribe(dt2 => {
	this.Weeks = JSON.parse(dt2["_body"]);
	for(let i in this.Weeks){
	if(this.Weeks[i].g_id == gid){
		this.wknraw.push(this.Weeks[i].weeknum);
	}
	}

  this.wknraw.sort(function(a,b) { 
  return a - b
  })

  this.RIWeeks = this.wknraw.slice(1);

    for(let q in this.RIWeeks) {
    for(let j in this.Weeks) {
    if(this.Weeks[j].weeknum == this.RIWeeks[q]) {
      if(this.Weeks[j].g_id == gid){
      this.RWeeks.push(this.Weeks[j]);
      }
    }
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
