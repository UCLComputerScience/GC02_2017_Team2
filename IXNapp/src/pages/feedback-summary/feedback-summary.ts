import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GroupPage } from '../group/group';
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
  ultimatewkn: number[] = [];
  mx: number;
  mx2: number;
  check: any[] = [];
  percentageresults: any[] = [];
  results: any[] = [];
  contrrow: number[] = [];
  sprow: number[] = [];
  Students: any[] = [];
  StudentNames: any[] = [];
  StudentIDs: any[] = [];
  CurAV: number[] = [];
  groupdata: number[] = [];
  str: string;
  str2: string;
  sum: number = 0;
    

  performanceAnnotation = ['bad', 'average', 'good', 'excellent']; //constants do not modify
  performanceColor = ['red', 'yellow', 'lightgreen', 'darkgreen']; //constants do not modify


  constructor(public navCtrl: NavController, public nav : NavParams, public house: HouseProvider, public http: Http) {
    this.groupnumber = this.nav.get('param1');

  }

  ngOnInit() {
    this.GetStage2Student().subscribe(dt => {
      this.Students = JSON.parse(dt["_body"]);

      for(let i in this.Students) {
      this.str = this.Students[i].fname;
      this.str2 = this.Students[i].lname;
      if(!this.StudentNames.includes(this.str.concat(" ", this.str2)) && this.Students[i].g_ID == this.groupnumber) {
        this.StudentNames.push(this.str.concat(" ", this.str2));
        this.StudentIDs.push(this.Students[i].s_ID);
        }
      }

      for(let q in this.Students) {
      if(this.Students[q].g_ID == this.groupnumber && !this.ultimatewkn.includes(this.Students[q].s_wk)) {
        this.ultimatewkn.push(this.Students[q].s_wk);
        this.groupdata.push(this.Students[q].gp);
      }
      }
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

      for(let j in this.Students) {
          for(let k in this.StudentIDs) {
          console.log(this.mx2);
            if(this.StudentIDs[k] == this.Students[j].s_ID && this.Students[j].s_wk == this.mx2) {
              if(!this.check.includes(this.StudentIDs[k])) {
              this.CurAV.push(this.Students[j].sp);
              this.check.push(this.StudentIDs[k]);
              }
            }
          }
      }
      console.log(this.StudentIDs);
      console.log(this.CurAV);

        for (let y in this.CurAV){
        this.sum = parseFloat((this.sum).toString()) + parseFloat((this.CurAV[y]).toString()); 
        }
        this.sum = this.sum/parseFloat((this.CurAV.length).toString()); 

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

      })

  }

  GetStage2Student() {
    var link = 'http://gc02team02app.azurewebsites.net/SQL/Stage2Student.php';
  var myData = JSON.stringify({DaGroup: this.groupnumber})

  return this.http.post(link, myData);
  }


  groupColorSetting(x) {
    var value = this.groupdata[x];  
    var indexvalue = value-1; 
    var colorName = this.performanceColor[indexvalue]; 
    return colorName; 
  }

  studentColorSetting(x, y) {  
    var indexvalue = this.results[x][y]-1; 
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
  
  goToDetails(params){
    if (!params) params = {};
    this.navCtrl.push(MoreDetailsPage);
  }

}  
