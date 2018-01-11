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

dt:any = {}; //variable needed for database retrieve
dt2:any = {}; //variable needed for database retrieve
wkn: number[] = []; //week
mx: number; //variable for max week variable
clicked: any = false; 
Students: any[];
RStudents: any[] = [];
Weeks: any[];
RWeeks: any[] = [];
RIWeeks: any[] = [];
wknraw: any[] = [];
Message: string;
Fullname: string;
	

  constructor(public navCtrl: NavController, public house: HouseProvider, public http: Http, public http2 : Http) {
  this.Message = 'Press on a Student!';
  }

  ngOnInit() { //code to initialize the view including analysis of information 
  	this.house.getAllRedStudent().subscribe(dt => { //function to retrieve the information from the database
    if (dt["_body"]) {
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

      if(this.RStudents.length == 0) {
        this.Message = 'No Red Students!';
      }

      } else {
      this.Message = 'No Red Students!';
      }

  	})
  }

  doRefresh(refresher) { //same code as, refresh the information
    console.log('Begin async operation', refresher);

    this.Message = 'Press on a Student!';

    this.dt = {}; 
    this.wkn = [];
    this.mx = 0;
    this.clicked = false;
    this.Students = [];
    this.RStudents = [];
    this.RWeeks = [];
    this.RIWeeks = [];

    this.house.getAllRedStudent().subscribe(dt => {
    if (dt["_body"]) {
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

      if(this.RStudents.length == 0) {
        this.Message = 'No Red Students!';
      }

      } else {
      this.Message = 'No Red Students!';
      }

    })

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  } 

onClick(first : any, last: any) { //function activated when one of the red button is clicked
	this.RWeeks = [];
	this.RIWeeks = [];
	this.clicked = true;
  	this.Weeks = [];
	this.wknraw = [];
	
	this.Fullname = first.concat(" ", last);

this.house.getAllRedStudent().subscribe(dt2 => {
	this.Weeks = JSON.parse(dt2["_body"]);
	for(let i in this.Weeks){
	if(this.Weeks[i].first == first && this.Weeks[i].last == last){
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
