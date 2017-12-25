import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GroupPage } from '../group/group';

@Component({
  selector: 'page-feedback-summary',
  templateUrl: 'feedback-summary.html'
})
export class FeedbackSummaryPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToGroup(params){
    if (!params) params = {};
    this.navCtrl.push(GroupPage);
  }
  
  students = ['Samantha Watson', 'John Taylor', 'James Kirk'];
  latestperformance = "good";
  overallperformance = "average";
  latestfeedback  = 4;
  groupnumber = "#";
  
  weekswithinfo = [1,2,3,4,5,8];
  groupdata = [4,4,3,4,4,3]; //group performance history 
  
  
  percentageresults = [
    [30, 30, 40],
    [34, 33, 33],
    [33, 33, 34],
    [33, 34, 33],
    [34, 33, 33],
    [33, 34, 33],
    [],
    [34, 33, 33],
    [33, 34, 33],
    [33, 33, 34]
  ];
  
    results = [
    [1, 4, 3],
    [2, 3, 4],
    [1,2,3],
    [],
    [],
    [],
    [],
    [],
    [],
    []
  ];

  performanceAnnotation = ['bad', 'average', 'good', 'excellent']; //constants do not modify
  performanceColor = ['red', 'yellow', 'lightgreen', 'darkgreen']; //constants do not modify


  latestWeek() {
    var weekIndex = this.weekswithinfo.length; 
    weekIndex = weekIndex-1; 
    var latestW = this.weekswithinfo[weekIndex]; 
    return latestW; 
  }

  averagePerformance(){
    var weekIndex = this.weekswithinfo.length; 
    var sum = 0;
    for (let i=0; i<weekIndex; i++){
      sum = sum+this.groupdata[i]; 
    }
    sum = sum/weekIndex; 
    return sum.toFixed(1);
  }

  latestPerformance() {
    var weekIndex = this.weekswithinfo.length; 
    var indexvalue = this.groupdata[weekIndex-1]; 
    return this.performanceAnnotation[indexvalue]; 
  }

  groupColorSetting(x) {
    var value = this.groupdata[x];  
    var indexvalue = value-1; 
    var colorName = this.performanceColor[indexvalue]; 
    return colorName; 
  }

  studentColorSetting(x, y) {  
    var indexvalue = this.results[x][y]-1; 
    var studentColor = this.performanceColor[indexvalue]; 
    return studentColor; 
  }


colourval = "blue";

  addfields() {
    var weekswithinfo = this.weekswithinfo;
    var indexx=[];
    var weekno = weekswithinfo.length;
    
      for (let i = 0; i < weekno; i++) {
        var weekval = weekswithinfo[i];
        if (weekval<6) {
            indexx.push(weekval-1);
        }
        else {
            indexx.push(weekval-2);
        }

      }

    return indexx;
  
  }
  
  setcolour() {
    var val = "blue";
    return val;
  }



  
  


  
}


  
  