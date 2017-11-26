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
  
  latestperformance = "good";
  overallperformance = "average";
  latestfeedback  = "4";
  
  weekswithinfo = [1,2,3,4,5,8];
  
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
    [4,3,3],
    [2,3,4],
    [1,2,3],
    [],
    [],
    [],
    [],
    [],
    [],
    []
  ];


 students = ['Samantha Watson', 'John Taylor', 'James Kirk'];

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


  
  