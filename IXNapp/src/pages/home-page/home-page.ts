import {Component, ViewChild} from '@angular/core';
import { NavController} from 'ionic-angular';
import { Chart } from 'chart.js';
import { HouseProvider } from '../../providers/house/house';

@Component({
  selector: 'page-home-page',
  templateUrl: 'home-page.html'
})
export class StudentHomePage {

  @ViewChild('lineCanvas') lineCanvas;

  
  Deadlinetitles: any[];
  Deadlinedates: any[];
  innerHeight: any;
	innerWidth: any;
  lineChart: any;
  Students: any[] = [];
  ultimatewkn: number[] = [];
  ultimatewkn2: string[] = [];
  weekindex: number;
  groupdata: number[] = [];
  studentdata: number[] = [];
  studentN: any[] = [];
  student: string;
  StudentIDs: any[] = [];
  contrhist: any[] = [];
  contribution: number;
  groupLatest: any[] = [];
  studentLatest: any[] = [];
  str: string;
  str2: string;
  
  constructor(public navCtrl: NavController, public house: HouseProvider) {
    this.innerHeight = (window.screen.height);
    this.innerWidth = (window.screen.width);
    this.student;  
    this.contribution; 
    this.weekindex; 
    this.performanceDescription; 
  }


  //variables to change for data retrieval
  //groupLatest = [3]; //latest group performance 
  //studentLatest = [3]; //latest student performance 
  //contribution = [33];  //latest student contribution 
  //weekindex = [4]; // latest week index
  //student = ['Samantha Watson']; //student name 
  //studentdata = [3, 2, 2, 1, 4, 3, 2]; //student performance history
  //groupdata = [4, 4, 3, 4, 3, 4, 3]; //group performance history 


  /*Not to change after here*/
  performanceDescription = ['bad', 'average', 'good', 'excellent']; //these are constants
  performanceColor = ['red','yellow','lightgreen', 'darkgreen']; //these are constants
  

  Date(): String{
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    return date;
  }

  latestPerformance() {
    var latestGroup = this.groupLatest;
    var indicator: any;
    indicator = latestGroup[0]-1; 
    return indicator;
  }

  studentLatestPerformance(){
    var latestStudent = this.studentLatest; 
    var indicator: any; 
    indicator = latestStudent[0]-1; 
    return indicator; 
  }

  ngOnInit() {
  this.house.GetStudentHome().subscribe(dt => {
      this.Students = JSON.parse(dt["_body"]);

      console.log(this.Students);

      for(let i in this.Students) {
      this.str = this.Students[i].fname;
      this.str2 = this.Students[i].lname;
      if(!this.studentN.includes(this.str.concat(" ", this.str2))) {
        this.studentN.push(this.str.concat(" ", this.str2));
        this.StudentIDs.push(this.Students[i].s_ID);
        }
      }

      this.student = this.studentN[0];

      for(let q in this.Students) {
        this.ultimatewkn.push(this.Students[q].s_wk);
        //this.groupdata.push(this.Students[q].gp);
        //this.studentdata.push(this.Students[q].sp);
        //this.contrhist.push(this.Students[q].contr);
      }

      this.ultimatewkn.sort(function(a,b) { 
      return a - b
      })

      for(let p in this.ultimatewkn) {
      for(let x in this.Students) {
        if(this.Students[x].s_wk == this.ultimatewkn[p]) {
          this.groupdata.push(this.Students[x].gp);
          this.studentdata.push(this.Students[x].sp);
          this.contrhist.push(this.Students[x].contr);
        }
      }
      }

      this.weekindex = Math.max.apply(Math, this.ultimatewkn);
      console.log(this.weekindex);

      this.groupLatest.push(this.groupdata[this.weekindex-1]);
      this.studentLatest.push(this.studentdata[this.weekindex-1]);
      this.contribution = this.contrhist[this.weekindex-1];

      for(let t in this.ultimatewkn) {
        var x;
        var y;
        y = "W";
        x = String(this.ultimatewkn[t]);
        this.ultimatewkn2.push(y.concat("", x));
      }


      let lineCTX = this.lineCanvas.nativeElement;
    lineCTX.height = innerHeight * 0.4;
    lineCTX.width = innerWidth;
    var data = {
      labels: this.ultimatewkn2, //["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9", "W10"],
      datasets: [
        {
          label: 'me',
          data: this.studentdata,
          fill: false, //the area below the line empty
          lineTension: 0.1, //making the lines straight
          backgroundColor: "rgba(255,99,132,1)",
          borderColor: "rgba(255,99,132,1)",
          pointBorderWidth: 5,
          pointHoverRadius: 10,
          pointHoverBackgroundColor: "rgba(255,99,132,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          spanGaps: true,
        }, {
          label: 'my group',
          data: this.groupdata,
          fill: false, //the area below the line empty
          lineTension: 0.1, //making the lines straight
          backgroundColor: "rgba(0,168,255,0.4)",
          borderColor: "rgba(0,168,255,0.4)",
          pointBorderWidth: 5,
          pointHoverRadius: 10,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(0,168,255,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          spanGaps: true,
        }

      ]
    };

    new Chart(
      lineCTX,
      {
        "type": 'line',
        "data": data,
        "options": {
          legend: {
            display: true,
            position: 'top',
            responsive: true, 
            maintainAspectRatio: false
          },
          "animation": {
            "animateScale": true,
            "animateRotate": false
          },
        }
      }
    );
  })
  }
}
