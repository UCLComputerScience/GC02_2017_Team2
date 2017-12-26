import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-more-details',
  templateUrl: 'more-details.html'
})
export class MoreDetailsPage {
    constructor(public navCtrl: NavController) {
    }

    names = ['Samantha Watson', 'John Taylor', 'James Kirk'];
    individualPerformances = ['good','good','average'];
    individualComments = ['good work','',''];
    
    groupPerformance = 'average';
    
    groupComment = 'The group progressed from last week but needs to work on the prototype more';





}