import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NgModule} from '@angular/core';


@Component({
  selector: 'page-group',
  templateUrl: 'group.html'
})
export class GroupPage implements OnInit {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }

  ngOnInit() {
  }

 goBack(params){
    if (!params) params = {};
    this.navCtrl.pop();
  }
  
  currentdateindex = 1;
  dates = ["25th of Sept to 1st of Oct 2017","2nd of Oct to 8th of Sept 2017","9th of Oct to 15th of Oct 2017"];
  
  weeks = ["Week 1", "Week 2", "Week 3"]
  
  names = ['Samantha Watson', 'John Taylor', 'James Kirk'];
  
  buttons = ['button1', 'button2', 'button3', 'button4'];
  
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

  buttonSelected;
  
  buttonSelect(k) {
    this.buttonSelected = k;
  }
  
  getDescription(k) {
    if (k == 0) {
        return "excellent";
    }
    else if (k == 1) {
        return "good";
    }
    else if (k == 2) {
        return "average";
    }
    else if (k == 3) {
        return "bad";
    }
  }
  
  onSelect(selectedIndex: number, studentIndex: number){
    this['isStudentSelected'+studentIndex] = selectedIndex;
  }
    
  getIsStudentSelected(i) {
    return this['isStudentSelected'+i];
  }
  
  
  
}

