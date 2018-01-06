import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HouseProvider } from '../../providers/house/house';
import { Http, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'page-more-details2',
  templateUrl: 'more-details2.html'
})


export class MoreDetailsPage2 {

SID: number;
group: number;
groups: number[] = [];
week;
Students: any[] = [];
names: any[] = [];
StudentIDs: any[] = [];
individualPerformances: number[] = [];
individualComments: any[] = [];
individualContributions: number[] = [];
groupComment: string;
groupPerformance: number;
str: string;
str2: string;
data:any = {};
data2:any = {};
photoarray: any[] = [];
photoarrayint: any[] = [];

groupPerformance2: string;


    constructor(public navCtrl: NavController, public nav : NavParams, public house: HouseProvider, public http: Http, public http2: Http) {
    this.SID = this.nav.get('param1');
    this.week = this.nav.get('param2');

    }

    ngOnInit() {
        this.house.MoreDetsS().subscribe(dt => {
            this.Students = JSON.parse(dt["_body"]);

            console.log(this.Students);

            for(let i in this.Students) {
            if(this.Students[i].g_wk == this.week && this.Students[i].s_ID == this.SID) {
            this.str = this.Students[i].fname;
            this.str2 = this.Students[i].lname;
            if(!this.names.includes(this.str.concat(" ", this.str2)) && this.Students[i].s_ID == this.SID) {
            this.names.push(this.str.concat(" ", this.str2));
            this.StudentIDs.push(this.Students[i].s_ID);
            this.individualPerformances.push(this.Students[i].sp);
            this.individualComments.push(this.Students[i].sc);
            this.individualContributions.push(this.Students[i].contr);
            this.groupComment = this.Students[i].gc;
            this.groupPerformance = this.Students[i].gp;
            this.groups.push(this.Students[i].g_ID);
            this.photoarrayint.push(this.Students[i].photo);
            }
            }
            }

            this.groupPerformance2 = this.getGroupPerformance();
            this.group = this.groups[0];
            this.photoarray.push(this.photoarrayint[0]);

        })
    }
    
    values = ['absent', 'bad', 'average', 'good', 'excellent']; // don't change
  
    photocompiler(i) {
    var photoname = "https://docs.google.com/uc?id=".concat(this.photoarray[i]); 
    return photoname; 
    }

    public getPerformance(x) {
    var performance = this.individualPerformances[x];
    var value = this.values[performance]; 
    return value; 
    }
  
    getGroupPerformance() {
        var value = this.values[this.groupPerformance];
        return value;
    }

}
