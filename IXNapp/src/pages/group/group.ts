import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NgModule} from '@angular/core';

@Component({
  selector: 'page-group',
  templateUrl: 'group.html'
})
export class GroupPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
 goBack(params){
    if (!params) params = {};
    this.navCtrl.pop();
  }
  
  currentdateindex = 1;
  dates = ["25th of Sept to 1st of Oct 2017","2nd of Oct to 8th of Sept 2017","9th of Oct to 15th of Oct 2017"];
  
  weeks = ["Week 1", "Week 2", "Week 3"]
  
  names = ['Samantha Watson', 'John Taylor', 'James Kirk'];
  
  
  buttonOneClicked() : void {
    this.button1 = "highlighted";
    this.button2 = this.button3 = this.button4 = "nothighlighted";
  }
  buttonTwoClicked() : void {
    this.button2 = "highlighted";
    this.button1 = this.button3 = this.button4 = "nothighlighted";
  }
  buttonThreeClicked() : void {
    this.button3 = "highlighted";
    this.button1 = this.button2 = this.button4 = "nothighlighted";
  }
  buttonFourClicked() : void {
    this.button4 = "highlighted";
    this.button1 = this.button2 = this.button3 = "nothighlighted";
  }
  
  nextweek() : void {
    if (this.currentdateindex < this.weeks.length-1) {
        this.currentdateindex++;
    }
  }
  
  previousweek() : void {
    if (this.currentdateindex > 0) {
        this.currentdateindex--;
    }
  }
  
  studentbuttonOneClicked() : void {
    this.studentbutton1 = "highlighted";
    this.studentbutton2 = this.studentbutton3 = this.studentbutton4 = "nothighlighted";
  }
  studentbuttonTwoClicked() : void {
    this.studentbutton2 = "highlighted";
    this.studentbutton1 = this.studentbutton3 = this.studentbutton4 = "nothighlighted";
  }
  studentbuttonThreeClicked() : void {
    this.studentbutton3 = "highlighted";
    this.studentbutton2 = this.studentbutton1 = this.studentbutton4 = "nothighlighted";
  }
  studentbuttonFourClicked() : void {
    this.studentbutton4 = "highlighted";
    this.studentbutton2 = this.studentbutton3 = this.studentbutton1 = "nothighlighted";
  }
  
  
  
}

