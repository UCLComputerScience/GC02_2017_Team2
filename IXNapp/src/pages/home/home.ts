import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DeadlinesPage } from '../deadlines/deadlines';
import { RedGroupsPage } from '../red-groups/red-groups';
import { RedStudentsPage } from '../red-students/red-students';
import { Chart } from 'chart.js';
import { Slides } from 'ionic-angular';


@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	@ViewChild('doughnutCanvas') doughnutCanvas;
	@ViewChild('doughnutCanvasS') doughnutCanvasS;
	@ViewChild(Slides) slides: Slides;

	ngAfterViewInit() {
		console.log("Slider------------>>Input Props Set");
		this.slides.autoHeight = true;
	}


	/*Data to retrieve for this section only */
	
	studentData = [2,4,1,5]; //bad, average, good, excellent order
	groupData = [1,2,3,5]; //bad, average, good, excellent order

	/* Do not modify anything below this */
	innerHeight: any;
	innerWidth: any;
	doughnutGroup: any;
	doughnutStudent: any; 
	Fred: any;
	Fyellow: any;
	Fgreen: any;
	Fdgreen: any;

	constructor(public navCtrl: NavController) {
		this.innerHeight = (window.screen.height);
		this.innerWidth = (window.screen.width);
	}

	doRefresh(refresher) {
		console.log('Sync in process ', refresher);
	
		setTimeout(() => {
		  console.log('Sync completed');
		  refresher.complete();
		}, 1000);
	}

	ionViewDidLoad() {
		this.studentData; 
		this.groupData; 

		let donutGroup = this.doughnutCanvas.nativeElement;
		donutGroup.height = innerHeight * 0.28;
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
	
		let donutStudent = this.doughnutCanvasS.nativeElement;
		donutStudent.height = innerHeight * 0.28;

		var dataStudent = {
			labels: [
				"Excellent",
				"Good",
				"Average",
				"Bad"
			],
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

