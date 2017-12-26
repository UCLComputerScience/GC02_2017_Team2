import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-more-details',
  templateUrl: 'more-details.html'
})
export class MoreDetailsPage {
    constructor(public navCtrl: NavController) {
    }
    
    //BACKEND HERE!!
    group = 5;
    week = 4;
    names = ['Samantha Watson', 'John Taylor', 'James Kirk'];
    individualPerformances = [4, 4, 5];
    individualComments = ['good work','',''];
    individualContributions = [33, 34, 33];
    groupPerformance = 2;
    groupComment = 'The group progressed from last week but needs to work on the prototype more';
    
    values = ['bad', 'average', 'good', 'excellent']; // don't change
    groupPerformance2 = this.getGroupPerformance();

    public getPerformance(x) {
    var performance = this.individualPerformances[x];
    var value = this.values[performance-1]; 
    return value; 
    }
  
    getGroupPerformance() {
        var value = this.values[this.groupPerformance-1];
        return value;
    }



}