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

doughnutChart: any;
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
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
    
           this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
    
               type: 'doughnut',
               data: {
                   
                   datasets: [{
                       label: '# of Votes',
                       labels: ["Red", "Blue", "Yellow", "Green"],
                       data: [12, 19, 3, 5],
                       backgroundColor: [
                           'rgba(255, 99, 132, 0.2)',
                           'rgba(54, 162, 235, 0.2)',
                           'rgba(255, 206, 86, 0.2)',
                           'rgba(75, 192, 192, 0.2)',
                           'rgba(153, 102, 255, 0.2)',
                           'rgba(255, 159, 64, 0.2)'
                       ],
                       hoverBackgroundColor: [
                           "#FF6384",
                           "#36A2EB",
                           "#FFCE56",
                           "#FF6384",
                           "#36A2EB",
                           "#FFCE56"
                       ]
                   }]
               }
    
           });
   
           this.doughnutChart = new Chart(this.doughnutCanvas2.nativeElement, {
               
                          type: 'doughnut',
                          data: {
                              //labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                              datasets: [{
                                  //label: '# of Votes',
                                  data: [12, 19, 3, 5],
                                  backgroundColor: [
                                      'rgba(255, 99, 132, 0.2)',
                                      'rgba(54, 162, 235, 0.2)',
                                      'rgba(255, 206, 86, 0.2)',
                                      'rgba(75, 192, 192, 0.2)',
                                      'rgba(153, 102, 255, 0.2)',
                                      'rgba(255, 159, 64, 0.2)'
                                  ],
                                  hoverBackgroundColor: [
                                      "#FF6384",
                                      "#36A2EB",
                                      "#FFCE56",
                                      "#FF6384",
                                      "#36A2EB",
                                      "#FFCE56"
                                  ]
                              }]
                          }
               
                      });
    
           
    
       }
}
