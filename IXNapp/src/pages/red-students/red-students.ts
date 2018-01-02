import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NgStyle } from '@angular/common';
import { Http, Headers, RequestOptions } from '@angular/http';

import { HouseProvider } from '../../providers/house/house';

@Component({
  selector: 'page-red-students',
  templateUrl: 'red-students.html'

})

export class RedStudentsPage {

dt:any = {};
dt2:any = {};
wkn: number[] = [];
mx: number;
clicked: any = false;
Students: any[];
RStudents: any[] = [];
Weeks: any[];
RWeeks: any[] = [];
RIWeeks: any[] = [];
	

  constructor(public navCtrl: NavController, public house: HouseProvider, public http: Http, public http2 : Http) {

  }

  ngOnInit() {
  	this.house.getAllRedStudent().subscribe(dt => {
  		this.Students = JSON.parse(dt["_body"]);

  		for(let i in this.Students){
  		this.wkn.push(this.Students[i].weeknum);
  		}
  		this.mx = Math.max.apply(Math, this.wkn);

  		for(let k in this.Students){
  		if(this.Students[k].weeknum == this.mx && this.Students[k].st_fb == 1) {
  			this.RStudents.push(this.Students[k]);
  		}
  		}

  	})
  } 

onClick(first : any, last: any) {
	this.RWeeks = [];
	this.RIWeeks = [];
	this.clicked = true;

this.house.getAllRedStudent().subscribe(dt2 => {
	this.Weeks = JSON.parse(dt2["_body"]);
	for(let i in this.Weeks){
	if(this.Weeks[i].first == first && this.Weeks[i].last == last){
		this.RIWeeks.push(this.Weeks[i].weeknum);
	}
	}

	this.RIWeeks.sort(function(a,b) { 
    return a - b
    })

    for(let q in this.RIWeeks) {
    for(let j in this.Weeks) {
    if(this.Weeks[j].weeknum == this.RIWeeks[q]) {
    	if(this.Weeks[j].first == first && this.Weeks[j].last == last){
    	this.RWeeks.push(this.Weeks[j]);
    	}
    }
    }
    }

	for(let i = 0; i < this.RWeeks.length; i++){
		if(this.RWeeks[i].st_fb == 4){
			this.RWeeks[i].st_fb = "dark";
		} else if(this.RWeeks[i].st_fb == 3){
			this.RWeeks[i].st_fb = "light";
		} else if(this.RWeeks[i].st_fb == 2){
			this.RWeeks[i].st_fb = "secondary";
		} else if(this.RWeeks[i].st_fb == 1){
			this.RWeeks[i].st_fb = "danger";
		}
	}
})

 	}
}
