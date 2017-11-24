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
  constructor(public navCtrl: NavController) {
    this.innerHeight = (window.screen.height);  
    this.innerWidth = (window.screen.width); //+"px"
  }
  goToDeadlines(params){
    if (!params) params = {};
    this.navCtrl.push(DeadlinesPage);
  }goToRedGroups(params){
    if (!params) params = {};
    this.navCtrl.push(RedGroupsPage);
  }goToRedStudents(params){
    if (!params) params = {};
    this.navCtrl.push(RedStudentsPage);
  }

  ionViewDidLoad() {    
    let donutCtx = this.doughnutCanvas.nativeElement; 
<<<<<<< HEAD
    donutCtx.height = innerHeight*0.35; 

    var data = {
        labels: [
            "Excellent",
            "Good",
            "Average", 
            "Bad"
        ],
        datasets: [
            {
                "data": [4, 5, 6, 3],
=======
    donutCtx.height = innerHeight*0.3; 
    var datax = [4, 5, 6, 8]; 
    var data = {
        labels: datax,
        datasets: [
            {
                "data": datax,
>>>>>>> Wontek
                "backgroundColor": [ 
                    "#ff6384", //red
                    "#ffcd56", //yellow
                    "#7ed321", //light gree
<<<<<<< HEAD
                    "#058d65" //dark gree
=======
                    "#058d65" //dark green 
>>>>>>> Wontek
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
<<<<<<< HEAD
                    display: true, 
                    position: 'right', 
=======
                    display: false, 
                    position: 'right',
>>>>>>> Wontek
                }, 
                responsive: true,
                maintainAspectRatio: true,
                "animation": {
                    "animateScale": true,
                    "animateRotate": false
<<<<<<< HEAD
                }
=======
                }, 
              
>>>>>>> Wontek
            }
        }
    );

    let donutCtx2 = this.doughnutCanvas2.nativeElement; 
<<<<<<< HEAD
    donutCtx2.height = innerHeight*0.35; 

    var data2 = {
        labels: [
            "Value A",
            "Value B"
        ],
    datasets: [
            {
                "data": [101342, 55342],
                "backgroundColor": [
                    "primary",
                    "secondary"
=======
    donutCtx2.height = innerHeight*0.3; 

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
>>>>>>> Wontek
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
<<<<<<< HEAD
                    display: true, 
                    position: 'bottom', 
=======
                    display: false, 
                    position: 'right', 
>>>>>>> Wontek
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
}
