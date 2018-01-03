import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HouseProvider } from '../../providers/house/house';
import { Http, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'page-deadlines',
  templateUrl: 'deadlines.html'
})

export class DeadlinesPage {

  Deadlinetitles: any[] = [];
  Deadlineraw: any[] = [];


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

      })

  }

  Date(): String{
      var today = new Date();
      var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
      return date;
  }

}
