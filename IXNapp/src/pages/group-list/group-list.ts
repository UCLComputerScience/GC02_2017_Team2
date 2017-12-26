import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FeedbackSummaryPage } from '../feedback-summary/feedback-summary';
import { GroupPage } from '../group/group';

@Component({
  selector: 'page-group-list',
  templateUrl: 'group-list.html'
})
export class GroupListPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToFeedbackSummary(params){
    if (!params) params = {};
    this.navCtrl.push(FeedbackSummaryPage);
  }goToGroup(params){
    if (!params) params = {};
    this.navCtrl.push(GroupPage);
  }
  
  groups = [1, 2, 7];
  
  performances = [1, 2, 3];
  
  performanceAnnotation = ['bad', 'average', 'good', 'excellent']; //constants do not modify
  
  getPerformance(x) {
    var value = this.performances[x];
    var colorName = this.performanceAnnotation[value-1];
    return colorName;
  }
}
