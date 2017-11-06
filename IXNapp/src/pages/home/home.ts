import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DeadlinesPage } from '../deadlines/deadlines';
import { RedGroupsPage } from '../red-groups/red-groups';
import { RedStudentsPage } from '../red-students/red-students';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
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
}
