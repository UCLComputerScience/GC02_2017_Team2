import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HouseProvider } from '../../providers/house/house';
import { Http, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'page-deadlines',
  templateUrl: 'deadlines.html'
})

export class DeadlinesPage {

  Deadlinetitles: any[] = []; // array containing the deadline titles
  Deadlineraw: any[] = []; // array containing all the deadline data, but in untreated form.
  dateString: string; //Date queried from the database.


  constructor(public navCtrl: NavController, public house: HouseProvider) {

  }

  ngOnInit(){

  this.house.getDead().subscribe(dt => {
      this.Deadlineraw = dt;

      this.Deadlineraw.sort(function(a, b){
      var aa = a.deadd.split('/').reverse().join();
      var bb = b.deadd.split('/').reverse().join();
      return aa < bb ? -1 : (aa > bb ? 1 : 0);
      });

      var today = new Date();
      var d = today.getDate();
      var m = today.getMonth()+1;
      var y = today.getFullYear();
      var dd: string = d + '/' + m + '/' + y; 
      var parts = dd.split("/");
      var z: Date = new Date(parseInt(parts[2]), (parseInt(parts[1]) - 1), parseInt(parts[0]));

      for(let i in this.Deadlineraw) {
      var t = this.Deadlineraw[i].deadd.split("/");
      var w: Date = new Date(parseInt(t[2]), (parseInt(t[1]) - 1), parseInt(t[0]));
        if(z < w) {
          this.Deadlinetitles.push(this.Deadlineraw[i]);
        }
      }
	  
      for(let j in this.Deadlineraw) {
      if(this.Deadlineraw[j].deadt == 'Start Date') {
      this.dateString = this.Deadlineraw[j].deadd;
      }
      }

      })
  }

  // This function that calculate whether today is a holiday.

  CurrentWeek(): String{
		var start = new Date(this.dateString);
		var today = new Date();
		var diff =(today.getTime() - start.getTime()) / 1000;
		diff /= (60 * 60 * 24 * 7);
		var diyy = Math.abs(Math.floor(diff))+1;
		if (diyy > 10){
		  return 'holidays'
		} else {
			var weekcounter = 'Week '+String(diyy)
		  return weekcounter; 
		}
	}
}
