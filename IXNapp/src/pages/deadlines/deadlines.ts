import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HouseProvider } from '../../providers/house/house';
import { Http, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'page-deadlines',
  templateUrl: 'deadlines.html'
})

export class DeadlinesPage {

  Deadlinetitles: any[];


  constructor(public navCtrl: NavController, public house: HouseProvider) {

  }

  ngOnInit(){

  this.house.getDead().subscribe(dt =>
      this.Deadlinetitles = dt);

  }

  Date(): String{
      var today = new Date();
      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      return date;
  }

}
