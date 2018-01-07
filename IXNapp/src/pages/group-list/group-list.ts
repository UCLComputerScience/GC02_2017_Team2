import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FeedbackSummaryPage } from '../feedback-summary/feedback-summary';
import { GroupPage } from '../group/group';
import { Http, Headers, RequestOptions } from '@angular/http';

import { HouseProvider } from '../../providers/house/house';

@Component({
  selector: 'page-group-list',
  templateUrl: 'group-list.html'
})
export class GroupListPage {

  items: any[] = [];
  itemstemp: any[] = [];
  items2: any[] = [];
  Groups: any[];
  TAGroups: any[] = [];
  
  // NEW ARRAY - PROJECT DESCRIPTIONS NEED TO BE LOADED HERE?
  
  //descriptions: any[] = ['description 1 lala', 'description 2', 'description 3'];

  descriptions: any[] = [];
  wkn: number[] = [];
  mx: number;

  public Gchosen: Number;


  constructor(public navCtrl: NavController, public house: HouseProvider) {

  this.house.GetStage2Student().subscribe(dt => {
  if (dt["_body"]) {
      this.Groups = JSON.parse(dt["_body"]);

      console.log(this.Groups);

      for(let q in this.Groups) {
        if(!this.TAGroups.includes(this.Groups[q].g_ID)) {
        this.TAGroups.push(this.Groups[q].g_ID);
        }
      }

      for(let i in this.TAGroups) {
      var groupw: number[] = [];
        for(let z in this.Groups) {
        console.log(this.Groups[z].g_ID == this.TAGroups[i]);
          if(this.Groups[z].g_ID == this.TAGroups[i]) {
            groupw.push(this.Groups[z].g_wk);
          }
        }
        var groupmax = Math.max.apply(Math, groupw);
      for(let k in this.Groups) {
      if(this.Groups[k].g_wk == groupmax && this.Groups[k].g_ID == this.TAGroups[i]) {
        if(!this.items.includes(this.Groups[k].g_ID)) {
        this.items.push(this.Groups[k].g_ID);
        this.itemstemp.push(this.Groups[k].gp);
        this.descriptions.push(this.Groups[k].pro);
        }
        }
      }
      }

      for(let j in this.itemstemp) {
      if(this.itemstemp[j] == 1) {
        this.items2.push('Bad');
      }
      if(this.itemstemp[j] == 2) {
        this.items2.push('Ok');
      }
      if(this.itemstemp[j] == 3) {
        this.items2.push('Good');
      }
      if(this.itemstemp[j] == 4) {
        this.items2.push('Excellent');
      }
      }    

      console.log(this.items);

    } else {
    // IF THERE ARE NO GROUPS WITH FEEDBACK HERE HERE HERE HERE HERE HERE HERE HERE HERE HERE HERE
    }

    })
  }

doRefresh(refresher) {
    console.log('Begin async operation', refresher);

  this.items = [];
  this.itemstemp = [];
  this.items2 = [];
  this.Groups = [];
  this.TAGroups = [];
  this.descriptions = [];

    this.house.GetStage2Student().subscribe(dt => {
    if (dt["_body"]) {
      this.Groups = JSON.parse(dt["_body"]);

      console.log(this.Groups);

      for(let q in this.Groups) {
        if(!this.TAGroups.includes(this.Groups[q].g_ID)) {
        this.TAGroups.push(this.Groups[q].g_ID);
        }
      }

      for(let i in this.TAGroups) {
      var groupw: number[] = [];
        for(let z in this.Groups) {
        console.log(this.Groups[z].g_ID == this.TAGroups[i]);
          if(this.Groups[z].g_ID == this.TAGroups[i]) {
            groupw.push(this.Groups[z].g_wk);
          }
        }
        var groupmax = Math.max.apply(Math, groupw);
      for(let k in this.Groups) {
      if(this.Groups[k].g_wk == groupmax && this.Groups[k].g_ID == this.TAGroups[i]) {
        if(!this.items.includes(this.Groups[k].g_ID)) {
        this.items.push(this.Groups[k].g_ID);
        this.itemstemp.push(this.Groups[k].gp);
        this.descriptions.push(this.Groups[k].pro);
        }
        }
      }
      }

      for(let j in this.itemstemp) {
      if(this.itemstemp[j] == 1) {
        this.items2.push('Bad');
      }
      if(this.itemstemp[j] == 2) {
        this.items2.push('Ok');
      }
      if(this.itemstemp[j] == 3) {
        this.items2.push('Good');
      }
      if(this.itemstemp[j] == 4) {
        this.items2.push('Excellent');
      }
      }    

      console.log(this.items);

      } else {
      // IF THERE ARE NO GROUPS WITH FEEDBACK HERE HERE HERE HERE HERE HERE HERE HERE HERE HERE HERE
      }

    })


    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
}

  performanceAnnotation = ['bad', 'average', 'good', 'excellent']; //constants do not modify
  
  getPerformance(x) {
    var value = this.itemstemp[x];
    var colorName = this.performanceAnnotation[value-1];
    return colorName;
  }

  goToFeedbackSummary(Gchosen : number){

    this.Gchosen = Gchosen;
    console.log(this.Gchosen);

    this.navCtrl.push(FeedbackSummaryPage, {
    param1: this.Gchosen
    });

  }goToGroup(params){
    if (!params) params = {};
    this.navCtrl.push(GroupPage);
  }
  
}
