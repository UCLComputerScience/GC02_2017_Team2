import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DeadlinesPage } from '../deadlines/deadlines';
import { RedGroupsPage } from '../red-groups/red-groups';
import { RedStudentsPage } from '../red-students/red-students';
import { Chart } from 'chart.js';
import { Slides } from 'ionic-angular';
import { OnInit } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import { HouseProvider } from '../../providers/house/house';


@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	@ViewChild('doughnutCanvas') doughnutCanvas;
	@ViewChild('doughnutCanvasS') doughnutCanvasS;
	@ViewChild(Slides) slides: Slides;

	Students: any[];
	Groups: any[];
	wkn: number[] = [];
	wkn2: number[] = [];
	mx: number;
	mx2: number;

	RCount: number = 0;
	ACount: number = 0;
	LCount: number = 0;
	DCount: number = 0;

	RGCount: number = 0;
	AGCount: number = 0;
	LGCount: number = 0;
	DGCount: number = 0;

	studentData: any[] = [];
	groupData: any[] = [];

	//studentData = [2,4,1,5]; bad, average, good, excellent order
	//groupData = [1,2,3,5]; bad, average, good, excellent order

	innerHeight: any;
	innerWidth: any;
	doughnutGroup: any;
	doughnutStudent: any; 
	Fred: any;
	Fyellow: any;
	Fgreen: any;
	Fdgreen: any;

	constructor(public navCtrl: NavController, public house: HouseProvider) {
		this.innerHeight = (window.screen.height);
		this.innerWidth = (window.screen.width);

	}

	ngOnInit() {

	this.house.getAllRedTeam().subscribe(dt => {
	if (dt["_body"]) {
		this.Groups = JSON.parse(dt["_body"]);

  		for(let i in this.Groups){
  		this.wkn2.push(this.Groups[i].weeknum);
  		}
  		this.mx2 = Math.max.apply(Math, this.wkn2);

  		for(let k in this.Groups){
  		if(this.Groups[k].weeknum == this.mx2 && this.Groups[k].g_fb == 1) {
  		this.RGCount = this.RGCount + 1;
  		}
  		if(this.Groups[k].weeknum == this.mx2 && this.Groups[k].g_fb == 2) {
  			this.AGCount = this.AGCount + 1;
  		}
  		if(this.Groups[k].weeknum == this.mx2 && this.Groups[k].g_fb == 3) {
  			this.LGCount = this.LGCount + 1;
  		}
  		if(this.Groups[k].weeknum == this.mx2 && this.Groups[k].g_fb == 4) {
  			this.DGCount = this.DGCount + 1;
  		}

  		}

  		this.groupData.push(this.RGCount);
		this.groupData.push(this.AGCount);
		this.groupData.push(this.LGCount);
		this.groupData.push(this.DGCount);

		let donutGroup = this.doughnutCanvas.nativeElement;
		donutGroup.height = innerHeight * 0.25;

		console.log(donutGroup.height);

		var datax = this.groupData;
		var dataGroup = {
			labels: datax,
			datasets: [
				{
					"data": datax,
					"backgroundColor": [
						"#ff6384", //red
						"#ffcd56", //yellow
						"#7ed321",//light green
						"#058d65",  //dark green, 
						 
						
					]
				}]
		};

		this.doughnutGroup= new Chart(
			donutGroup,
			{
				"type": 'doughnut',
				"data": dataGroup,
				"options": {
					legend: {
						display: false,
					},
					responsive: true,
					maintainAspectRatio: true,
					"animation": {
						"animateScale": true,
						"animateRotate": false
					},
				}
			}
		);

		} else {
			// HERE HANDLE IF THERE IS NO DATA FOR THE DOUGHNUT HERE HERE HERE HERE HERE HERE HERE HERE HERE HERE HERE
		}

		});

		this.house.getAllRedStudent().subscribe(dt => {
		if (dt["_body"]) {
		this.Students = JSON.parse(dt["_body"]);

		for(let i in this.Students){
  		this.wkn.push(this.Students[i].weeknum);
  		}
  		this.mx = Math.max.apply(Math, this.wkn);

  		for(let k in this.Students){
  		if(this.Students[k].weeknum == this.mx && this.Students[k].st_fb == 1) {
  			this.RCount = this.RCount + 1;
  			console.log(this.RCount);
  		}
  		if(this.Students[k].weeknum == this.mx && this.Students[k].st_fb == 2) {
  			this.ACount = this.ACount + 1;
  		}
  		if(this.Students[k].weeknum == this.mx && this.Students[k].st_fb == 3) {
  			this.LCount = this.LCount + 1;
  		}
  		if(this.Students[k].weeknum == this.mx && this.Students[k].st_fb == 4) {
  			this.DCount = this.DCount + 1;
  		}

  		}

  		this.studentData.push(this.RCount);
		this.studentData.push(this.ACount);
		this.studentData.push(this.LCount);
		this.studentData.push(this.DCount);

		console.log(this.studentData);

		let donutStudent = this.doughnutCanvasS.nativeElement;
		donutStudent.height = innerHeight * 0.25;

		var dataStudent = {
			datasets: [
				{
					"data": this.studentData,
					"backgroundColor": [
						"#ff6384", //red
						"#ffcd56", //yellow
						"#7ed321", //light green
						"#058d65", //dark green, 
					]
				}]
		};

		this.doughnutStudent = new Chart(
			donutStudent,
			{
				"type": 'doughnut',
				"data": dataStudent,
				"options": {
					legend: {
						display: false,
						position: 'right',
					},
					responsive: true,
					maintainAspectRatio: true,
					"animation": {
						"animateScale": true,
						"animateRotate": false
					}
				}
			}
		);

		} else {
		// HERE HANDLE IF THERE IS NO DATA FOR THE DOUGHNUT HERE HERE HERE HERE HERE HERE HERE HERE HERE HERE HERE
		}

		});
		console.log(this.studentData);


	this.slides.autoHeight = true;
	console.log("happened");


	}

	CurrentWeek(): String{
		var start = new Date("2017-10-06");
		var today = new Date();
		var diff =(today.getTime() - start.getTime()) / 1000;
		diff /= (60 * 60 * 24 * 7);
		var diyy = Math.abs(Math.floor(diff))+1;
		if (diyy > 10){
		  return 'holidays'
		} else {
			var weekcounter = 'Week '+String(diyy)
		  return weekcounter; 
		}
	}

 /* AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA */

	doRefresh(refresher) {
		console.log('Sync in process ', refresher);
		this.innerHeight = (window.screen.height);
		this.innerWidth = (window.screen.width);
		console.log(this.innerHeight);
		console.log(this.innerWidth); 
		this.Students= [];
		this.Groups= [];
		this.wkn= [];
		this.wkn2= [];
		this.mx= 0;
		this.mx2= 0;

		this.RCount= 0;
		this.ACount= 0;
		this.LCount= 0;
		this.DCount= 0;

		this.RGCount= 0;
		this.AGCount= 0;
		this.LGCount= 0;
		this.DGCount= 0;

		this.studentData= [];
		this.groupData= [];

		this.house.getAllRedTeam().subscribe(dt => {
		if (dt["_body"]) {
		this.Groups = JSON.parse(dt["_body"]);

  		for(let i in this.Groups){
  		this.wkn2.push(this.Groups[i].weeknum);
  		}
  		this.mx2 = Math.max.apply(Math, this.wkn2);

  		for(let k in this.Groups){
  		if(this.Groups[k].weeknum == this.mx2 && this.Groups[k].g_fb == 1) {
  		this.RGCount = this.RGCount + 1;
  		}
  		if(this.Groups[k].weeknum == this.mx2 && this.Groups[k].g_fb == 2) {
  			this.AGCount = this.AGCount + 1;
  		}
  		if(this.Groups[k].weeknum == this.mx2 && this.Groups[k].g_fb == 3) {
  			this.LGCount = this.LGCount + 1;
  		}
  		if(this.Groups[k].weeknum == this.mx2 && this.Groups[k].g_fb == 4) {
  			this.DGCount = this.DGCount + 1;
  		}

  		}

  		this.groupData.push(this.RGCount);
		this.groupData.push(this.AGCount);
		this.groupData.push(this.LGCount);
		this.groupData.push(this.DGCount);

		let donutGroup = this.doughnutCanvas.nativeElement;
		

		console.log(donutGroup.height);

		var datax = this.groupData;
		var dataGroup = {
			labels: datax,
			datasets: [
				{
					"data": datax,
					"backgroundColor": [
						"#ff6384", //red
						"#ffcd56", //yellow
						"#7ed321",//light green
						"#058d65",  //dark green, 
						 
						
					]
				}]
		};

		this.doughnutGroup= new Chart(
			donutGroup,
			{
				"type": 'doughnut',
				"data": dataGroup,
				"options": {
					legend: {
						display: false,
					},
					responsive: true,
					maintainAspectRatio: true,
					"animation": {
						"animateScale": true,
						"animateRotate": false
					},
				}
			}
		);

		} else {
		// HERE HANDLE IF THERE IS NO DATA FOR THE DOUGHNUT HERE HERE HERE HERE HERE HERE HERE HERE HERE HERE HERE
		}

		});

		this.house.getAllRedStudent().subscribe(dt => {
		if (dt["_body"]) {
		this.Students = JSON.parse(dt["_body"]);

		for(let i in this.Students){
  		this.wkn.push(this.Students[i].weeknum);
  		}
  		this.mx = Math.max.apply(Math, this.wkn);

  		for(let k in this.Students){
  		if(this.Students[k].weeknum == this.mx && this.Students[k].st_fb == 1) {
  			this.RCount = this.RCount + 1;
  			console.log(this.RCount);
  		}
  		if(this.Students[k].weeknum == this.mx && this.Students[k].st_fb == 2) {
  			this.ACount = this.ACount + 1;
  		}
  		if(this.Students[k].weeknum == this.mx && this.Students[k].st_fb == 3) {
  			this.LCount = this.LCount + 1;
  		}
  		if(this.Students[k].weeknum == this.mx && this.Students[k].st_fb == 4) {
  			this.DCount = this.DCount + 1;
  		}

  		}

  		this.studentData.push(this.RCount);
		this.studentData.push(this.ACount);
		this.studentData.push(this.LCount);
		this.studentData.push(this.DCount);

		console.log(this.studentData);

		let donutStudent = this.doughnutCanvasS.nativeElement;

		var dataStudent = {
			datasets: [
				{
					"data": this.studentData,
					"backgroundColor": [
						"#ff6384", //red
						"#ffcd56", //yellow
						"#7ed321", //light green
						"#058d65", //dark green, 
					]
				}]
		};

		this.doughnutStudent = new Chart(
			donutStudent,
			{
				"type": 'doughnut',
				"data": dataStudent,
				"options": {
					legend: {
						display: false,
						position: 'right',
					},
					responsive: true,
					maintainAspectRatio: true,
					"animation": {
						"animateScale": true,
						"animateRotate": false
					}
				}
			}
		);

		} else {
		// HERE HANDLE IF THERE IS NO DATA FOR THE DOUGHNUT HERE HERE HERE HERE HERE HERE HERE HERE HERE HERE HERE
		}

		});

	setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();

    }, 500);
	
}

goToDeadlines(params) {
		if (!params) params = {};
		this.navCtrl.push(DeadlinesPage);
	} goToRedGroups(params) {
		if (!params) params = {};
		this.navCtrl.push(RedGroupsPage);
	} goToRedStudents(params) {
		if (!params) params = {};
		this.navCtrl.push(RedStudentsPage);
	}
}
