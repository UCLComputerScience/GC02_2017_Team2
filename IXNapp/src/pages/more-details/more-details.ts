import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { HouseProvider } from '../../providers/house/house';
import { FeedbackSummaryPage } from '../feedback-summary/feedback-summary';
import { Http, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'page-more-details',
  templateUrl: 'more-details.html'
})


export class MoreDetailsPage {

group: number;
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

groupPerformance2: string;


    constructor(private alertCtrl: AlertController, public navCtrl: NavController, public nav : NavParams, public house: HouseProvider, public http: Http, public http2: Http) {
    this.group = this.nav.get('param1');
    this.week = this.nav.get('param2');

    }

    ngOnInit() {
        this.house.MoreDets().subscribe(dt => {
            this.Students = JSON.parse(dt["_body"]);

            console.log(this.Students);

            for(let i in this.Students) {
            if(this.Students[i].g_wk == this.week && this.Students[i].g_ID == this.group) {
            this.str = this.Students[i].fname;
            this.str2 = this.Students[i].lname;
            if(!this.names.includes(this.str.concat(" ", this.str2)) && this.Students[i].g_ID == this.group) {
            this.names.push(this.str.concat(" ", this.str2));
            this.StudentIDs.push(this.Students[i].s_ID);
            this.individualPerformances.push(this.Students[i].sp);
            this.individualComments.push(this.Students[i].sc);
            this.individualContributions.push(this.Students[i].contr);
            this.groupComment = this.Students[i].gc;
            this.groupPerformance = this.Students[i].gp;
            this.photoarray.push(this.Students[i].photo);
            }
            }
            }
            this.groupPerformance2 = this.getGroupPerformance();
        })
    }
    
    values = ['bad', 'average', 'good', 'excellent']; // don't change
    cardvalues = ['cardbad', 'cardaverage', 'cardgood', 'cardexcellent']

    public getCard(i) { 
        var performance = this.individualPerformances[i]; 
        var value = this.cardvalues[performance-1]; 
        console.log(value); 
        return value; 
    }

    public getPerformance(x) {
    var performance = this.individualPerformances[x];
    var value = this.values[performance-1]; 
    return value; 
    }
  
    getGroupPerformance() {
        var value = this.values[this.groupPerformance-1];
        return value;
    }
  
    photocompiler(i) {
    var photoname = "https://docs.google.com/uc?id=".concat(this.photoarray[i]); 
    return photoname; 
    }


    del() {

            let alert = this.alertCtrl.create({
              title: 'Confirm Deletion',
              message: 'Do you want to proceed with deletion of this feedback?',
              buttons: [
                {
                  text: 'Cancel',
                  role: 'cancel',
                  handler: () => {
                  }
                },
                {
                  text: 'Proceed',
                  handler: () => {
                    for(let j in this.Students) {
                        var link = 'http://gc02team02app.azurewebsites.net/SQL/DelS.php';
                    var myData =  JSON.stringify({week: this.week, sID: this.StudentIDs[j]})
                
                    this.http.post(link, myData).subscribe(data => {
                    this.data.response = data["_body"];
                    }, error => {
                    console.log("Oooops!");
                    })
                
                    }
                
                    var link2 = 'http://gc02team02app.azurewebsites.net/SQL/DelG.php';
                    var myData2 =  JSON.stringify({week: this.week, gID: this.group})
                
                    this.http2.post(link2, myData2).subscribe(data2 => {
                    this.data2.response = data2["_body"];
                    }, error => {
                    console.log("Oooops!");
                    })
                      
                    this.navCtrl.popTo( this.navCtrl.getByIndex(0));
                  }
                }
              ]
            });
            alert.present();
          }

        

 

    


}
