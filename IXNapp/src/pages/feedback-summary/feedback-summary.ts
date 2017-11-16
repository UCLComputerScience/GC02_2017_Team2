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
}
