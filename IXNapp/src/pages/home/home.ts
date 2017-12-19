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
	@ViewChild('doughnutCanvas2') doughnutCanvas2;
	@ViewChild(Slides) slides: Slides;

	ngAfterViewInit() {
		console.log("Slider------------>>Input Props Set");
		this.slides.autoHeight = true;
		// this.Slides.observer = true ;
	}

	innerHeight: any;
	innerWidth: any;
	doughnutChart: any;
	Fred: any;
	Fyellow: any;
	Fgreen: any;
	Fdgreen: any;

	constructor(public navCtrl: NavController) {
		this.innerHeight = (window.screen.height);
		this.innerWidth = (window.screen.width); //+"px"
	}

	ionViewDidLoad() {
		this.Fred = 4;
		this.Fyellow = 6;
		this.Fgreen = 5;
		this.Fdgreen = 7;

		let donutCtx = this.doughnutCanvas.nativeElement;
		donutCtx.height = innerHeight * 0.28;
		var datax = [4, 5, 6, 8];
		var data = {
			labels: datax,
			datasets: [
				{
					"data": datax,
					"backgroundColor": [
						"#ff6384", //red
						"#ffcd56", //yellow
						"#7ed321", //light gree
						"#058d65" //dark green 
					]
				}]
		};

		new Chart(
			donutCtx,
			{
				"type": 'doughnut',
				"data": data,
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
					},

				}
			}
		);

		let donutCtx2 = this.doughnutCanvas2.nativeElement;
		donutCtx2.height = innerHeight * 0.28;

		var data2 = {
			labels: [
				"Excellent",
				"Good",
				"Average",
				"Bad"
			],
			datasets: [
				{
					"data": [4, 5, 6, 3],
					"backgroundColor": [
						"#ff6384", //red
						"#ffcd56", //yellow
						"#7ed321", //light gree
						"#058d65" //dark green 
					]
				}]
		};

		new Chart(
			donutCtx2,
			{
				"type": 'doughnut',
				"data": data2,
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

