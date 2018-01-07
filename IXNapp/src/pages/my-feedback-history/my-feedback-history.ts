import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HouseProvider } from '../../providers/house/house';
import { MoreDetailsPage2 } from '../more-details2/more-details2';

@Component({
  selector: 'page-my-feedback-history',
  templateUrl: 'my-feedback-history.html'
})
export class MyFeedbackHistoryPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  
  constructor(public navCtrl: NavController, public house: HouseProvider, public nav : NavParams) {
    this.student; 
    this.percentageresults; 
    this.groupnumber; 
  }

  groupnumber: number;
  ID: number;
  Students: any[] = [];
  str: string;
  str2: string;
  groupdata: number[] = [];
  studentdata: number[] = [];
  groupIDs: number[] = [];
  studentN: any[] = [];
  student: string;
  StudentIDs: any[] = [];
  percentageresults: any[] = [];
  weekswithinfo: number[] = [];

/* Do not change anything beyond this point */

  performanceAnnotation = ['absent', 'bad', 'average', 'good', 'excellent']; //constants do not modify
  performanceColor = ['black', 'red', 'yellow', 'lightgreen', 'darkgreen']; //constants do not modify

  ngOnInit() {
    this.house.GetStudentHome().subscribe(dt => {
    if (dt["_body"]) {
      this.Students = JSON.parse(dt["_body"]);

        for(let i in this.Students) {
      this.str = this.Students[i].fname;
      this.str2 = this.Students[i].lname;
      if(!this.studentN.includes(this.str.concat(" ", this.str2))) {
        this.studentN.push(this.str.concat(" ", this.str2));
        this.StudentIDs.push(this.Students[i].s_ID);
        this.groupIDs.push(this.Students[i].g_ID);
        }
      }

      this.groupnumber = this.groupIDs[0];

      this.ID = this.StudentIDs[0];

      this.student = this.studentN[0];

      for(let q in this.Students) {
        this.weekswithinfo.push(this.Students[q].s_wk);
      }

      this.weekswithinfo.sort(function(a,b) { 
      return a - b
      })

      for(let p in this.weekswithinfo) {
      for(let x in this.Students) {
        if(this.Students[x].s_wk == this.weekswithinfo[p]) {
          this.groupdata.push(this.Students[x].gp);
          this.studentdata.push(this.Students[x].sp);
          this.percentageresults.push(this.Students[x].contr);
        }
      }
      }

      } else {
      // IF THERE ARE NO FEEDBACK FOR THAT STUDENT AND HIS TEAM HERE HERE HERE HERE HERE
      }

      })
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    this.groupnumber = 0;
    this.ID = 0;
    this.Students = [];
    this.groupdata = [];
    this.studentdata = [];
    this.groupIDs = [];
    this.studentN = [];
    this.StudentIDs = [];
    this.percentageresults = [];
    this.weekswithinfo = [];

    this.house.GetStudentHome().subscribe(dt => {
    if (dt["_body"]) {
      this.Students = JSON.parse(dt["_body"]);

        for(let i in this.Students) {
      this.str = this.Students[i].fname;
      this.str2 = this.Students[i].lname;
      if(!this.studentN.includes(this.str.concat(" ", this.str2))) {
        this.studentN.push(this.str.concat(" ", this.str2));
        this.StudentIDs.push(this.Students[i].s_ID);
        this.groupIDs.push(this.Students[i].g_ID);
        }
      }

      this.groupnumber = this.groupIDs[0];

      this.ID = this.StudentIDs[0];

      this.student = this.studentN[0];

      for(let q in this.Students) {
        this.weekswithinfo.push(this.Students[q].s_wk);
      }

      this.weekswithinfo.sort(function(a,b) { 
      return a - b
      })

      for(let p in this.weekswithinfo) {
      for(let x in this.Students) {
        if(this.Students[x].s_wk == this.weekswithinfo[p]) {
          this.groupdata.push(this.Students[x].gp);
          this.studentdata.push(this.Students[x].sp);
          this.percentageresults.push(this.Students[x].contr);
        }
      }
      }

      } else {
      // IF THERE ARE NO FEEDBACK FOR THAT STUDENT AND HIS TEAM HERE HERE HERE HERE HERE
      }

      })

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
  
  groupColorSetting(x) {
    var indexvalue = this.groupdata[x];
    var colorName = this.performanceColor[indexvalue]; 
    return colorName; 
  }

  studentColorSetting(x) {  
    var indexvalue = this.studentdata[x]; 
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
    var sum: number = 0;
    for (let i=0; i<weekIndex; i++){
      sum = sum + parseFloat((this.groupdata[i]).toString()); 
    }
    sum = sum/parseFloat((weekIndex).toString()); 
    return sum.toFixed(1);
  }

  latestPerformance() {
    var weekIndex = this.weekswithinfo.length; 
    console.log(weekIndex);
    var indexvalue = this.groupdata[weekIndex-1]; 
    console.log(indexvalue);
    return this.performanceAnnotation[indexvalue]; 
    
  }

  goToDetails(week: number){
    this.navCtrl.push(MoreDetailsPage2, {
    param1: this.ID, param2: week
    });
  }

}
