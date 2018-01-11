import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GroupPage } from '../group/group';
import { MoreDetailsPage } from '../more-details/more-details';
import { HouseProvider } from '../../providers/house/house';
import { Http, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'page-feedback-summary',
  templateUrl: 'feedback-summary.html'
})

export class FeedbackSummaryPage {

  latestperformance: String;
  overallperformance = "average";
  latestfeedback: Number;
  groupnumber: number;

  Groups: any[];
  wkn: number[] = [];
  wcheck: number[] = [];
  ultimatewkn: number[] = [];
  wknraw: number[] = [];
  mx: number;
  mx2: number;
  percentageresults: any[] = [];
  results: any[] = [];
  contrrow: number[] = [];
  sprow: number[] = [];
  Students: any[] = [];
  StudentNames: any[] = [];
  StudentIDs: any[] = [];
  groupdata: number[] = [];
  str: string;
  str2: string;
  sum: number = 0;
    

  performanceAnnotation = ['absent', 'bad', 'average', 'good', 'excellent']; //constants do not modify
  performanceColor = ['black', 'red', 'yellow', 'lightgreen', 'darkgreen']; //constants do not modify


  constructor(public navCtrl: NavController, public nav : NavParams, public house: HouseProvider, public http: Http) {
    this.groupnumber = this.nav.get('param1');
  }
  // populates variables by getting data from teh database (based on user ID)
  ngOnInit() {
    this.GetStage2Student().subscribe(dt => {
    if (dt["_body"]) {
      this.Students = JSON.parse(dt["_body"]);

      console.log(this.Students);

      for(let i in this.Students) {
      this.str = this.Students[i].fname;
      this.str2 = this.Students[i].lname;
      if(!this.StudentNames.includes(this.str.concat(" ", this.str2)) && this.Students[i].g_ID == this.groupnumber) {
        this.StudentNames.push(this.str.concat(" ", this.str2));
        this.StudentIDs.push(this.Students[i].s_ID);
        }
      }

      for(let q in this.Students) {
      if(this.Students[q].g_ID == this.groupnumber && !this.wknraw.includes(this.Students[q].s_wk)) {
        this.wknraw.push(this.Students[q].s_wk);
        //this.groupdata.push(this.Students[q].gp);
      }
      }

      this.wknraw.sort(function(a,b) { 
      return a - b
      })

      this.ultimatewkn = this.wknraw.slice(1);

      for(let p in this.ultimatewkn) {
      for(let z in this.Students) {
      if(this.Students[z].g_ID == this.groupnumber) {
        console.log(this.Students[z].s_wk == this.ultimatewkn[p]);
        if(this.Students[z].s_wk == this.ultimatewkn[p]) {
        if(!this.wcheck.includes(this.Students[z].s_wk)) {
        this.wcheck.push(this.Students[z].s_wk);
        this.groupdata.push(this.Students[z].gp);
        }
      }
      }
      }
      }

      console.log(this.groupdata);

      this.mx2 = Math.max.apply(Math, this.ultimatewkn);

      for(let e in this.Students) {
      console.log(this.Students[e].g_wk == this.mx2 && this.Students[e].g_ID == this.groupnumber);
      if(this.Students[e].g_wk == this.mx2 && this.Students[e].g_ID == this.groupnumber) {
        this.latestfeedback = this.Students[e].gp;
      }
      }

      if(this.latestfeedback == 1) {
        this.latestperformance = 'Bad';
      }
      if(this.latestfeedback == 2) {
        this.latestperformance = 'Average';
      }
      if(this.latestfeedback == 3) {
        this.latestperformance = 'Good';
      }
      if(this.latestfeedback == 4) {
        this.latestperformance = 'Excellent';
      }


        for (let y in this.groupdata){
        this.sum = parseFloat((this.sum).toString()) + parseFloat((this.groupdata[y]).toString()); 
        }
        var a = (this.sum/parseFloat((this.groupdata.length).toString())).toFixed(1);
        this.sum = parseFloat(a); 

        for(let h in this.ultimatewkn) {
        console.log(this.percentageresults);
        this.contrrow= [];
        this.sprow= [];
          for(let g in this.Students) {
            for(let u in this.StudentIDs) {
            if(this.Students[g].g_ID == this.groupnumber && this.ultimatewkn[h] == this.Students[g].s_wk) {
              if(this.Students[g].s_ID == this.StudentIDs[u]) {
                this.contrrow.push(this.Students[g].contr);
                this.sprow.push(this.Students[g].sp);
              }

            }
            }
          }
          if(this.contrrow.length != 0) {
          this.percentageresults.push(this.contrrow);
          }
          if(this.sprow.length != 0) {
          this.results.push(this.sprow);
          }
        }

        } else {

        } 

      })

  }
  

  GetStage2Student() {
    var link = 'http://gc02team02app.azurewebsites.net/SQL/Stage2Student.php';
  var myData = JSON.stringify({DaGroup: this.groupnumber})

  return this.http.post(link, myData);
  }
  
  // ion refresh - refreshes variables
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

  this.wcheck = [];
  this.ultimatewkn = [];
  this.mx2 = 0;
  this.percentageresults = [];
  this.results = [];
  this.contrrow = [];
  this.sprow = [];
  this.Students = [];
  this.StudentNames = [];
  this.StudentIDs = [];
  this.groupdata = [];
  this.sum = 0;
  this.wknraw = [];

    this.GetStage2Student().subscribe(dt => {
    if (dt["_body"]) {
      this.Students = JSON.parse(dt["_body"]);

      console.log(this.Students);

      for(let i in this.Students) {
      this.str = this.Students[i].fname;
      this.str2 = this.Students[i].lname;
      if(!this.StudentNames.includes(this.str.concat(" ", this.str2)) && this.Students[i].g_ID == this.groupnumber) {
        this.StudentNames.push(this.str.concat(" ", this.str2));
        this.StudentIDs.push(this.Students[i].s_ID);
        }
      }

      for(let q in this.Students) {
      if(this.Students[q].g_ID == this.groupnumber && !this.wknraw.includes(this.Students[q].s_wk)) {
        this.wknraw.push(this.Students[q].s_wk);
        //this.groupdata.push(this.Students[q].gp);
      }
      }

      this.wknraw.sort(function(a,b) { 
      return a - b
      })

      this.ultimatewkn = this.wknraw.slice(1);

      console.log(this.ultimatewkn);

      for(let p in this.ultimatewkn) {
      for(let z in this.Students) {
      if(this.Students[z].g_ID == this.groupnumber) {
        console.log(this.Students[z].s_wk == this.ultimatewkn[p]);
        if(this.Students[z].s_wk == this.ultimatewkn[p]) {
        if(!this.wcheck.includes(this.Students[z].s_wk)) {
        this.wcheck.push(this.Students[z].s_wk);
        this.groupdata.push(this.Students[z].gp);
        }
      }
      }
      }
      }

      console.log(this.groupdata);

      this.mx2 = Math.max.apply(Math, this.ultimatewkn);

      for(let e in this.Students) {
      console.log(this.Students[e].g_wk == this.mx2 && this.Students[e].g_ID == this.groupnumber);
      if(this.Students[e].g_wk == this.mx2 && this.Students[e].g_ID == this.groupnumber) {
        this.latestfeedback = this.Students[e].gp;
      }
      }

      if(this.latestfeedback == 1) {
        this.latestperformance = 'Bad';
      }
      if(this.latestfeedback == 2) {
        this.latestperformance = 'Average';
      }
      if(this.latestfeedback == 3) {
        this.latestperformance = 'Good';
      }
      if(this.latestfeedback == 4) {
        this.latestperformance = 'Excellent';
      }


        for (let y in this.groupdata){
        this.sum = parseFloat((this.sum).toString()) + parseFloat((this.groupdata[y]).toString()); 
        }
        var a = (this.sum/parseFloat((this.groupdata.length).toString())).toFixed(1);
        this.sum = parseFloat(a); 

        for(let h in this.ultimatewkn) {
        console.log(this.percentageresults);
        this.contrrow= [];
        this.sprow= [];
          for(let g in this.Students) {
            for(let u in this.StudentIDs) {
            if(this.Students[g].g_ID == this.groupnumber && this.ultimatewkn[h] == this.Students[g].s_wk) {
              if(this.Students[g].s_ID == this.StudentIDs[u]) {
                this.contrrow.push(this.Students[g].contr);
                this.sprow.push(this.Students[g].sp);
              }

            }
            }
          }
          if(this.contrrow.length != 0) {
          this.percentageresults.push(this.contrrow);
          }
          if(this.sprow.length != 0) {
          this.results.push(this.sprow);
          }
        }

        } else {
        // IF THERE ARE NO STUDENTS WITH FEEDBACK FOR THE CHOSEN GROUP HERE HERE HERE HERE HERE HERE HERE HERE
        }

      })


    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

// get colour name from number
  groupColorSetting(x) {
    var indexvalue = this.groupdata[x];
    var colorName = this.performanceColor[indexvalue]; 
    return colorName; 
  }

// set class name for specifc student and button
  studentColorSetting(x, y) {  
    var indexvalue = this.results[x][y]; 
    var studentColor = this.performanceColor[indexvalue]; 
    return studentColor; 
  }


colourval = "blue";
  
  setcolour() {
    var val = "blue";
    return val;
  }

  goToGroup(params){
    if (!params) params = {};
    this.navCtrl.push(GroupPage,  {
    param1: this.groupnumber
    });
  }
  
  goToDetails(week: number){
    this.navCtrl.push(MoreDetailsPage, {
    param1: this.groupnumber, param2: week
    });
  }

}
