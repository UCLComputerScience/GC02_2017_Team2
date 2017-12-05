import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-deadlines',
  templateUrl: 'deadlines.html'
})

export class DeadlinesPage {

  Deadlinetitles: any[];
  Deadlinedates: any[];
  constructor(public navCtrl: NavController) {
  }

  ngOnInit(){

    this.Deadlinetitles= [{Title: "HCI Deadline", Date: "15/11/2017"},{Title: "Final Deadline", Date: "10/01/2018"}];
    this.Deadlinedates= [{Date: "15/11/2017"}, {Date: "10/01/2018"}];
  }

  Date(): String{
      var today = new Date();
      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      return date;
  }

}
