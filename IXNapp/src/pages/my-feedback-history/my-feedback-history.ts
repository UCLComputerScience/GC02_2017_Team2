import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-my-feedback-history',
  templateUrl: 'my-feedback-history.html'
})
export class MyFeedbackHistoryPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  
  constructor(public navCtrl: NavController) {
    this.student; 
    this.percentageresults; 
    this.groupnumber; 
  }

  /* Data retrieval (only this section to modify with data) */

  groupnumber = 4; //group number
  student = 'Samantha Watson'; //student name
  weekswithinfo = [1,2,3,4,5,8]; //week numbers of those performances
  studentdata = [3,2,2,1,4,3,2]; //student performance history
  groupdata = [4,4,3,4,4,3]; //group performance history 
  percentageresults = [30, 33, 40, 33, 34, 30]; //contribution percentages

/* Do not change anything beyond this point */

  performanceAnnotation = ['bad', 'average', 'good', 'excellent']; //constants do not modify
  performanceColor = ['red', 'yellow', 'lightgreen', 'darkgreen']; //constants do not modify
  
  groupColorSetting(x) {
    var value = this.groupdata[x];  
    var indexvalue = value-1; 
    var colorName = this.performanceColor[indexvalue]; 
    return colorName; 
  }

  studentColorSetting(x) {  
    var indexvalue = this.studentdata[x]-1; 
    var studentColor = this.performanceColor[indexvalue]; 
    return studentColor; 
  }

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







}
